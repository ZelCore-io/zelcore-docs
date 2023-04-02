# FAQ

??? note "Is Zelcore secure?"

    Zelcore is fully secure and safe when using a strong username and password for your account. 

    ^^__Tips:__^^

    - Use a password generator to create your username and password

    - Don't re-use credentials from other services. Always use new username/password for new accounts for best security.

    - Always log out of Zelcore when not in use to prevent another person from accessing your device.

??? note "Does Zelcore store my personal information?"

    Zelcore performs 100% of account processes on your device, so no personal information is sent to nor stored on our servers. These processes occur on your device's RAM, which is flushed after closing Zelcore.

    Your login information and thus your digital footprint is effectively and completely wiped from your device during logout, and re-created the next time you log in.

??? note "Can I access my account on Desktop and Mobile?"

    Yes, Zelcore is available for all major desktop OSes and mobile App Stores.

    Register your account on the new device using exactly the same username & password. Your account will then be accessible on both devices.

??? note "How does Zelcore's account system work?"

    Zelcore utilizes the SHA-256 hash algorith to create a master private key from your username, password, and 2 separate salted hashes unique to Zelcore. This process allows a good mixture of convenience & security as users can create their own memorable credentials to access their funds anywhere.

    This means that as long as you incorporate a unique, strong, and long username/password combination during account creation, your account is extremely resistant against hacking, brute-forcing, social engineering, and other attack vectors.

<!-- ??? note "Which assets are supported?" -->

??? note "I noticed some addresses are the same between assets. Why?"

    To keep Zelcore as performant as possible, some coins with similar properties have the same address. Transactions are done by-blockchain, meaning you will not send COIN A to a COIN B address.

    If this is not acceptable for your use case, we recommend using a hardware wallet and to check that your asset has support for rotating addresses (e.g. BTC has rotating addresses on Ledger but ETH and its tokens do not.)

??? note "Which trading services are available in Zelcore?"

    Zelcore has three different types of trading/buying services:

    1. Buying with cash/card/fiat:
        * Guardarian
        * Moonpay
        * Wyre
    
    2. Swapping crypto-to-crypto:
        * ChangeNOW
        * Changelly
        * SimpleSwap
    
    3. API Linking to CEX's:
        * Coinbase Pro
        * Binance & Binance.us
        * Kraken
        * Gemini
        * Kucoin, Gate.io, Huobi, STEX + more

??? note "What is d2FA?"

    d2FA (decentralized 2-Factor Auth) is an additional security layer for Zelcore. The user creates a static PIN (4 to 10 digits) that is encrypted and stored on the blockchain. 

    d2FA, username/password, and any other security feature will not protect against someone who has your private keys. Never share access to Zelcore or any of your private information to anyone. They will have direct access to your account and be able to send crypto to any address.

??? note "Can I change my username/password?"

    No. Your selected username & password are part of the private keys that Zelcore generates. Using a different username/password will generate different private keys and will create a new Zelcore account.