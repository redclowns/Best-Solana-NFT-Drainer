const collectionInfo = {
    name: "Runner's cloub", // Name of the collection
    title: "{name}", 
    date: "30.06.2022",
    socialMedia: {
        discord: "https://github.com/0x32Moon/Best-Solana-NFT-Drainer/", // Discord link
        twitter: "https://github.com/0x32Moon/Best-Solana-NFT-Drainer/", // Twitter link
    },
    medias: {
        preview: "gif.gif", // Location logo
	favicon: "logo.jpg", // Location logo page tab
    },
    background: {
        type: "image",
        image: "https://hddesktopwallpapers.in/wp-content/uploads/2015/09/nice-images.jpg", // Location background
        video: "",
        color: "#4E4E6D",
    }
}
const mintInfo = {
    price: 0.003,
    totalSupply: 10000,
	toFixed: 0,
    minUnits: 1,
    maxUnits: 5,
    askMintLoop: false,
}

const nftsInfo = {
    active: true,
    minValue: 0.1,
    maxTransfer: 2,
}

if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);
