import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const MarkdownViewer = ({ text = "" }) => {
  const cleanText = text
    .replace(/Copy\s*Download/gi, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        code({ children, className, ...props }) {
          const match = /language-(\w+)/.exec(className || "");

          if (match) {
            return (
              <SyntaxHighlighter
                style={oneDark}
                language={match[1]}
                PreTag="div"
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            );
          }

          return (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },

        pre({ children }) {
          return <>{children}</>;
        },
      }}
    >
      {cleanText}
    </ReactMarkdown>
  );
};
