import { useState } from "react";
import { Page, Text, Button } from "@vercel/examples-ui";
import { Code, CodeBlock, dracula } from 'react-code-blocks';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
console.log("baseUrl :", baseUrl);

// You can use this for API calls, etc.
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
      className="absolute top-2 right-2 bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 text-sm"
    >
      {copied ? "Copied! ✨" : "Copy 📋"}
    </button>
  );
};

function IndexPage() {
  // terminal commands and code blocks
  const basicCurlCmd = `curl ${baseUrl}`;
  const basicCurlCodeBlock = `# Use this command if your terminal does not support color
${basicCurlCmd}`;

  const basicWgetCmd = `wget -qO - ${baseUrl}`;
  const basicWgetCodeBlock = `# If you prefer wget instead
${basicWgetCmd}`;

  const colorCurlCmd = `curl -G -d 'colorTerm=true' ${baseUrl}`;
  const colorCurlCodeBlock = `# Use this command if your terminal supports color
${colorCurlCmd}`;


  const colorWgetCmd = `wget -qO - "${baseUrl}/?colorTerm=true"`;
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

  return (
    <Page>
      <section className="flex flex-col gap-4">
        <Text variant="h1">Simon Lalonde&apos;s CV hub!</Text>
        <Text>
          Access my CV directly through your terminal or explore the full HTML version in your browser.
        </Text>
        <Text>
          This Next.js app uses a middleware to intercept headers and redirect requests, allowing you to access the CV from the same URL using <Code text={"curl"} language="bash" showLineNumbers={false} /> or <Code text={"wget"} language="bash" showLineNumbers={false} />.
        </Text>
      </section>

      <section className="mt-8">
        <Text variant="h2">Quick Access Options</Text>
        <div className="flex flex-col gap-8 mt-6">
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
            <div className="relative">
              <CodeBlock
                text={basicWgetCodeBlock}
                language="bash"
                theme={dracula}
                showLineNumbers={false}
              />
              <CopyButton text={basicWgetCmd} />
            </div>
          </div>
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
            <div className="relative">
              <CodeBlock
                text={colorWgetCodeBlock}
                language="bash"
                theme={dracula}
                showLineNumbers={false}
              />
              <CopyButton text={colorWgetCmd} />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">3. Full CV from your browser</h3>
            <Link href="/cv.html" passHref>
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
    </Page>
  );
}

export default IndexPage;
