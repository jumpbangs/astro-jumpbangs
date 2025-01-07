interface CodeMockupProps {
  code: string[];
  toggleLineNumber?: boolean;
}

export const CodeMockup = ({ code, toggleLineNumber = false }: CodeMockupProps) => {
  return (
    <div className="mockup-code bg-black text-white">
      {code.map((value, index) => (
        <pre key={index} data-prefix={toggleLineNumber ? index + 1 : index === 0 ? `$` : `>`}>
          <code>{value}</code>
        </pre>
      ))}
    </div>
  );
};
