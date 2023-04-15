declare module "*.svg" {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export const ReactComponent: React.FunctionComponent<
    React.ComponentProps<'svg'> & { title?: string }
  >
  export default content;
}
declare module "*.png" {
  const src: string
  export default src
}