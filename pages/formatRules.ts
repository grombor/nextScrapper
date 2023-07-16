interface FormatRule {
    pattern: RegExp;
    replacement: string;
  }
  
  const formatRules: FormatRule[] = [
    { pattern: /\s+PLN/g, replacement: '' },
    { pattern: /\s+mm/g, replacement: '' },
    { pattern: /\s+/g, replacement: ' ' },
    { pattern: /^\s+|\s+$/g, replacement: '' },
  ];
  
  export function applyFormatRules(text: string): string {
    let formattedText = text;
    formatRules.forEach((rule) => {
      formattedText = formattedText.replace(rule.pattern, rule.replacement);
    });
    return formattedText;
  }
  