"use client"
import { PrivyProvider } from "@privy-io/react-auth";
import { polygon } from "viem/chains";

const AppProvider = ({ children }: { children: React.ReactNode }) => {

  // This method will be passed to the PrivyProvider as a callback
  // that runs after successful login.
  const handleLogin = async (user: any) => {
    console.log(`User ${user.id} logged in!`, user);
  };

  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ""}
      onSuccess={handleLogin}
      config={{
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
          noPromptOnSignature: true,
          requireUserPasswordOnCreate: false,
        },
        defaultChain: polygon,
        supportedChains: [polygon],
        loginMethods: ["sms"],
        appearance: {
          accentColor: "#28f040",
          theme: "#FFFFFF",
          showWalletLoginFirst: false,
          logo: "https://phone-dev.dtlqa3yezii8g.amplifyapp.com/suku-wallet-logo.svg",
        },
      }}
    >
      {children}
    </PrivyProvider>
  )
};

export default AppProvider;
