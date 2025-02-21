declare module "react-timeago/lib/language-strings/vi" {
  const vietnameseStrings: Record<string, string>;
  export default vietnameseStrings;
}

declare module "react-timeago/lib/formatters/buildFormatter" {
  const buildFormatter: (
    locales: Record<string, string>
  ) => (
    value: number,
    unit: string,
    suffix: string,
    epochMilliseconds: number
  ) => string;
  export default buildFormatter;
}
