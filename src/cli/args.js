const parseArgs = () => {
    // Write your code here
    const rssPropFlag = '--';
    const rssArgs = process.argv.slice(2)
        .reduce((acc, arg, i, args) => {
            if (arg.startsWith(rssPropFlag)) {
                const formattedProp = `${arg.slice(2)} is ${args[i + 1]}`;

                return [...acc, formattedProp];
            };

            return acc;
        }, []);

    const rssArgsStr = rssArgs.join(', ');

    console.log(rssArgsStr);
};

parseArgs();