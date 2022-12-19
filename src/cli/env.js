const parseEnv = () => {
    // Write your code here
    const rssVarFlag = 'RSS_';
    const rssVar = Object.entries(process.env)  
        .reduce((acc, [key, value]) => {
            if (key.startsWith(rssVarFlag)) {
                const formattedProp = `${key}=${value}`;

                return [...acc, formattedProp];
            }

            return acc;
        }, []);
    
    const rssArgsStr = rssVar.join('; ');

    console.log(rssArgsStr);
};

parseEnv();