declare module "*.glb" {
  const src: string;
  export default src;
}

declare module "*.hdr" {
  const src: string;
  export default src;
}
  declare global {
    interface Window {
      Calendly: {
        initPopupWidget: (config: { url: string }) => void;
      };
    }
  }