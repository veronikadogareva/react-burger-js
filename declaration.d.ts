// declare module "*.css" {
//   const content: Record<string, string>;
//   export default content;
// }
declare module "*.png" {
  const value: string;
  export = value;
}
declare module "*.module.css";
