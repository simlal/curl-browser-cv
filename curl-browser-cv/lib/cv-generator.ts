
import { CVData, CVSection, CVItem } from './cv-data';

export interface Colors {
  blue: string;
  yellow: string;
  cyan: string;
  green: string;
  magenta: string;
  reset: string;
  bold: string;
}

const COLORS: Colors = {
  blue: '\x1b[1;34m',
  yellow: '\x1b[1;33m',
  cyan: '\x1b[1;36m',
  green: '\x1b[1;32m',
  magenta: '\x1b[1;35m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

const NO_COLORS: Colors = {
  blue: '',
  yellow: '',
  cyan: '',
  green: '',
  magenta: '',
  reset: '',
  bold: ''
};

export class CVGenerator {
  private colors: Colors;
  private width = 74;

  constructor(useColors: boolean = false) {
    this.colors = useColors ? COLORS : NO_COLORS;
  }

  private line(char: string = '='): string {
    return this.colors.blue + char.repeat(this.width) + this.colors.reset;
  }

  private center(text: string, color: string = ''): string {
    const padding = Math.max(0, (this.width - text.length) / 2);
    return ' '.repeat(Math.floor(padding)) + color + text + this.colors.reset;
  }

  private header(data: CVData): string {
    const { personal } = data;
    const labelWidth = Math.max(
      'LinkedIn'.length,
      'Location'.length,
      'GitHub'.length,
      'Email'.length
    );

    return [
      this.line(),
      this.center(personal.name, this.colors.yellow),
      this.line(),
      '',
      `${this.colors.cyan}${'GitHub'.padEnd(labelWidth)}:${this.colors.reset} ${personal.github}`,
      `${this.colors.cyan}${'LinkedIn'.padEnd(labelWidth)}:${this.colors.reset} ${personal.linkedin}`,
      `${this.colors.cyan}${'Email'.padEnd(labelWidth)}:${this.colors.reset} ${personal.email}`,
      `${this.colors.cyan}${'Location'.padEnd(labelWidth)}:${this.colors.reset} ${personal.location}`,
    ].join('\n');
  }

  private sectionHeader(title: string): string {
    return [
      '',
      this.line('-'),
      this.center(title.toUpperCase(), this.colors.yellow),
      this.line('-')
    ].join('\n');
  }

  private renderList(items: CVItem[]): string {
    const labelWidth = Math.max(...items.map(i => i.label.length));
    return items.map(item =>
      `${this.colors.green}${item.label.padEnd(labelWidth)}:${this.colors.reset} ${item.value}`
    ).join('\n');
  }

  private renderEducation(items: CVItem[]): string {
    return items.map(item => [
      `${this.colors.green}${item.degree}${this.colors.reset}`,
      `    ${this.colors.blue}${item.institution}${this.colors.reset} (${item.period})`
    ].join('\n')).join('\n\n');
  }

  private calculateColumnWidths(items: CVItem[]): { [key: string]: number } {
    const keys = Object.keys(items[0]).filter(key => key !== 'details');
    const widths: { [key: string]: number } = {};

    keys.forEach(key => {
      widths[key] = Math.max(
        key.length,
        ...items.map(item => String(item[key] || '').length)
      ) + 2;
    });

    return widths;
  }

  private renderTable(items: CVItem[]): string {
    const keys = Object.keys(items[0]).filter(key => key !== 'details');
    const widths = this.calculateColumnWidths(items);

    const separator = '|' + keys.map(key =>
      '-'.repeat(widths[key])
    ).join('|') + '|';

    const headerRow = '|' + keys.map(key =>
      ` ${this.colors.magenta}${key.padEnd(widths[key] - 1)}${this.colors.reset}|`
    ).join('');

    const dataRows = items.map(item => {
      const mainRow = '|' + keys.map(key =>
        ` ${this.colors.blue}${String(item[key] || '').padEnd(widths[key] - 1)}${this.colors.reset}|`
      ).join('');

      let block = separator + '\n' + mainRow;

      if (item.details && Array.isArray(item.details)) {
        for (const detail of item.details) {
          const totalWidth = keys.reduce((sum, key) => sum + widths[key], 0) + (keys.length - 1);
          // totalWidth = sum of widths + separators between columns
          const text = `• ${detail}`;
          const padded = text.padEnd(totalWidth - 2); // minus 2 for the spaces after borders
          block += '\n|' + this.colors.green + ' ' + padded + this.colors.reset + ' |';
        }
      }

      block += '\n' + separator;
      return block;
    });

    return [separator, headerRow, separator, ...dataRows].join('\n');
  }

  private renderSection(section: CVSection): string {
    const header = this.sectionHeader(section.title);
    let content = '';

    switch (section.type) {
      case 'list':
        content = this.renderList(section.items);
        break;
      case 'education':
        content = this.renderEducation(section.items);
        break;
      case 'table':
        content = this.renderTable(section.items);
        break;
    }

    return header + '\n' + content;
  }

  public generate(data: CVData): string {
    const sections = [
      this.header(data),
      ...data.sections.map(section => this.renderSection(section)),
      this.line()
    ];

    return sections.join('\n\n') + '\n';
  }
}
