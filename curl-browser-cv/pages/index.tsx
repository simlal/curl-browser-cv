import { useState, useEffect } from "react";
import { Page, Text, Button } from "@vercel/examples-ui";
import { Code, CodeBlock, dracula } from 'react-code-blocks';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
console.debug("baseUrl for curl/wget copy:", baseUrl);

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 px-2 py-1 rounded text-sm text-gray-800 dark:text-gray-200"
    >
      {copied ? "Copied! ✨" : "Copy 📋"}
    </button>
  );
};

const ThemeButton = ({ theme, toggleTheme }: { theme: "light" | "dark", toggleTheme: () => void }) => {
  return (
    <button
      onClick={toggleTheme}
      className="absolute top-2 right-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200"
    >
      {theme === "light" ? "☀️" : "🌙"}
    </button>
  );
};

function IndexPage() {
  // terminal commands and code blocks
  const basicCurlCmd = `curl ${baseUrl} | less`;
  const basicCurlCodeBlock = `# Use this command if your terminal does not support color
${basicCurlCmd}`;

  const basicWgetCmd = `wget -qO - ${baseUrl} | less`;
  const basicWgetCodeBlock = `# If you prefer wget instead
${basicWgetCmd}`;

  const colorCurlCmd = `curl -G -d 'colorTerm=true' ${baseUrl} | less`;
  const colorCurlCodeBlock = `# Use this command if your terminal supports color
${colorCurlCmd}`;


  const colorWgetCmd = `wget -qO - "${baseUrl}/?colorTerm=true" | less`;
  const colorWgetCodeBlock = `# Again if you prefer wget instead
${colorWgetCmd}`;

  // CV button custom styling
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? 'darkviolet' : 'purple',
    border: '1px solid black',
    color: 'white',
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  // Toggle light-dark theme

  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Page className="relative">
        <ThemeButton theme={theme} toggleTheme={toggleTheme} />
        {/* Intro Section */}
        <section className="flex flex-col gap-4">
          <Text
            variant="h1"
            className="text-center font-bold"
          >
            Simon Lalonde&apos;s CV Hub!
          </Text>
          <Text>
            A simple Next app serving my CV in multiple formats from a single URL —
            perfect for terminal nerds 🤓 and browser users alike. 🚀
          </Text>
        </section>

        {/* Technical Implementation */}
        <section className="mt-6">
          <Text variant="h2">🔧 Tech details</Text>
          <div className={`p-4 rounded-lg mt-2 bg-gray-50 dark:bg-gray-800`}>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>
                <strong>Simple Routing:</strong> Middleware detects whether the request comes from a
                terminal or a browser.
              </li>
              <li>
                <strong>Terminal CV Generator:</strong> Terminal CV content
                rendered in both colored and plain-text formats
              </li>
            </ul>
          </div>
        </section>

        {/* Quick Access Options */}
        <section className="mt-8">
          <Text variant="h2">⚡ Quick Access Options</Text>
          <div className="flex flex-col gap-8 mt-6">

            {/* Plain-text CV */}
            <div>
              <h3 className="text-lg font-bold">1. View plain-text CV</h3>
              <div className="relative">
                <CodeBlock
                  text={basicCurlCodeBlock}
                  language="bash"
                  theme={dracula}
                  showLineNumbers={false}
                />
                <CopyButton text={basicCurlCmd} />
              </div>
              <div className="relative mt-2">
                <CodeBlock
                  text={basicWgetCodeBlock}
                  language="bash"
                  theme={dracula}
                  showLineNumbers={false}
                />
                <CopyButton text={basicWgetCmd} />
              </div>
            </div>

            {/* Color-formatted CV */}
            <div>
              <h3 className="text-lg font-bold">2. View color-formatted CV</h3>
              <div className="relative">
                <CodeBlock
                  text={colorCurlCodeBlock}
                  language="bash"
                  theme={dracula}
                  showLineNumbers={false}
                />
                <CopyButton text={colorCurlCmd} />
              </div>
              <div className="relative mt-2">
                <CodeBlock
                  text={colorWgetCodeBlock}
                  language="bash"
                  theme={dracula}
                  showLineNumbers={false}
                />
                <CopyButton text={colorWgetCmd} />
              </div>
            </div>

            {/* Full CV in Browser */}
            <div>
              <h3 className="text-lg font-bold">3. Full CV from your browser</h3>
              <Link href="/cv.html">
                <Button
                  style={buttonStyle}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  View Full CV
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Page >
    </div >
  );
}

export default IndexPage;
