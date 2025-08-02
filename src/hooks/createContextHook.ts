import { useContext, type FC, type Context } from "react";

type ProviderComponent = FC<any>;

export function createContextHook<T>(
  context: Context<T>,
  provider: ProviderComponent | string
) {
  return function useContextHook() {
    const contexValue = useContext(context);
    if (contexValue === undefined) {
      const providerName = getProviderName(provider);
      throw new Error(`this component must be used within a ${providerName}`);
    }
    return contexValue;
  };
}

function getProviderName(provider: ProviderComponent | string) {
  return typeof provider === "string"
    ? provider
    : provider.name || provider.displayName || "provider";
}
