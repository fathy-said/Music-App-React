import axios from "axios";

export let dataOption = [
    { name: "pop", value: "pop" },
    { name: "hip-hop", value: "hip-hop" },
    { name: "dance", value: "dance" },
    { name: "electronic", value: "electronic" },
    { name: "soul", value: "soul" },
    { name: "alternive", value: "alternive" },
    { name: "rock", value: "rock" },
    { name: "latin", value: "latin" },
    { name: "film", value: "film" },
    { name: "country", value: "country" },
    { name: "worldwide", value: "worldwide" },
    { name: "reggae", value: "reggae" },
    { name: "house", value: "house" },
    { name: "k-pop", value: "k-pop" },
];

const options = {
    method: "GET",
    params: { artist_id: "136975" },
    headers: {
        "X-RapidAPI-Key": "d83d98d51amsha9df4824370aceep1c3b02jsnfe37221b204d",
        "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
    },
};

let dataAxios = async () => {
    let res = await axios.get(
        // `https://shazam-core.p.rapidapi.com/v1/artists/details`,
        options
    );
    console.log(res.data);
};

export let musicData = [
    {
        layout: "5",
        type: "MUSIC",
        key: "632531170",
        title: "Unholy",
        subtitle: "Sam Smith & Kim Petras",
        share: {
            subject: "Unholy - Sam Smith & Kim Petras",
            text: "I used Shazam to discover Unholy by Sam Smith & Kim Petras.",
            href: "https://www.shazam.com/track/632531170/unholy",
            image: "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/0d/97/a6/0d97a649-760f-522c-269d-9d710dc372ba/22UM1IM07174.rgb.jpg/400x400cc.jpg",
            twitter:
                "I used @Shazam to discover Unholy by Sam Smith & Kim Petras.",
            html: "https://www.shazam.com/snippets/email-share/632531170?lang=en&country=GB",
            avatar: "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/02/ec/b3/02ecb3c1-8c1c-7100-c430-a251066460a2/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/632531170",
        },
        images: {
            background:
                "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/02/ec/b3/02ecb3c1-8c1c-7100-c430-a251066460a2/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/0d/97/a6/0d97a649-760f-522c-269d-9d710dc372ba/22UM1IM07174.rgb.jpg/400x400cc.jpg",
            coverarthq:
                "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/0d/97/a6/0d97a649-760f-522c-269d-9d710dc372ba/22UM1IM07174.rgb.jpg/400x400cc.jpg",
            joecolor: "b:36311dp:e4c29ds:e0a581t:c1a583q:be8e6d",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1649325659",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/3c/2c/82/3c2c8235-9907-0405-b21c-8fd66d285e56/mzaf_6122099414111658029.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/unholy/1649325651?i=1649325659&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/unholy/1649325651?i=1649325659&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "sam-smith",
                id: "42",
                adamid: "156488786",
            },
            {
                alias: "kim-petras",
                id: "42",
                adamid: "291697579",
            },
        ],
        url: "https://www.shazam.com/track/632531170/unholy",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "636972694",
        title: "The Astronaut",
        subtitle: "JIN",
        share: {
            subject: "The Astronaut - JIN",
            text: "I used Shazam to discover The Astronaut by JIN.",
            href: "https://www.shazam.com/track/636972694/the-astronaut",
            image: "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/1b/38/ea/1b38eacd-158d-5040-8887-2786d2a641bc/192641874338_Cover.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover The Astronaut by JIN.",
            html: "https://www.shazam.com/snippets/email-share/636972694?lang=en&country=GB",
            avatar: "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/a1/b7/ca/a1b7ca45-84c6-1939-70cb-fdfb79c23b68/c6967405-5d2d-4e64-91ec-be857bb9b0b6_ami-identity-e3de1066dd9a89fa6fadb60b1a50fdd9-2022-10-24T04-08-49.135Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/636972694",
        },
        images: {
            background:
                "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/a1/b7/ca/a1b7ca45-84c6-1939-70cb-fdfb79c23b68/c6967405-5d2d-4e64-91ec-be857bb9b0b6_ami-identity-e3de1066dd9a89fa6fadb60b1a50fdd9-2022-10-24T04-08-49.135Z_cropped.png/800x800cc.jpg",
            coverart:
                "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/1b/38/ea/1b38eacd-158d-5040-8887-2786d2a641bc/192641874338_Cover.jpg/400x400cc.jpg",
            coverarthq:
                "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/1b/38/ea/1b38eacd-158d-5040-8887-2786d2a641bc/192641874338_Cover.jpg/400x400cc.jpg",
            joecolor: "b:000000p:fdfdfds:2ffdcbt:cacacaq:25caa3",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1649563461",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/bc/5c/5c/bc5c5ca1-0aa1-457d-65ce-f0f56f8a8245/mzaf_12809811648741532519.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/the-astronaut/1649563458?i=1649563461&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/the-astronaut/1649563458?i=1649563461&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "jin",
                id: "42",
                adamid: "1191850724",
            },
        ],
        url: "https://www.shazam.com/track/636972694/the-astronaut",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "626708777",
        title: "Miss You",
        subtitle: "Oliver Tree & Robin Schulz",
        share: {
            subject: "Miss You - Oliver Tree & Robin Schulz",
            text: "I used Shazam to discover Miss You by Oliver Tree & Robin Schulz.",
            href: "https://www.shazam.com/track/626708777/miss-you",
            image: "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/69/e0/27/69e02785-714c-d0b9-ba68-04a2361fa7e5/075679730466.jpg/400x400cc.jpg",
            twitter:
                "I used @Shazam to discover Miss You by Oliver Tree & Robin Schulz.",
            html: "https://www.shazam.com/snippets/email-share/626708777?lang=en&country=GB",
            avatar: "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/c2/71/66/c2716603-3ffb-7965-b3e3-98d09c433c49/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/626708777",
        },
        images: {
            background:
                "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/c2/71/66/c2716603-3ffb-7965-b3e3-98d09c433c49/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/69/e0/27/69e02785-714c-d0b9-ba68-04a2361fa7e5/075679730466.jpg/400x400cc.jpg",
            coverarthq:
                "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/69/e0/27/69e02785-714c-d0b9-ba68-04a2361fa7e5/075679730466.jpg/400x400cc.jpg",
            joecolor: "b:fea300p:090500s:4c1200t:3a2500q:6f2f00",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1638208778",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/78/d1/8f/78d18f9f-671b-3c3c-0033-917651170937/mzaf_14625856779470870222.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/miss-you/1638208775?i=1638208778&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/miss-you/1638208775?i=1638208778&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: true,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "oliver-tree",
                id: "42",
                adamid: "1140096017",
            },
            {
                alias: "robin-schulz",
                id: "42",
                adamid: "347433400",
            },
        ],
        url: "https://www.shazam.com/track/626708777/miss-you",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "601555046",
        title: "Calm Down",
        subtitle: "Rema",
        share: {
            subject: "Calm Down - Rema",
            text: "I used Shazam to discover Calm Down by Rema.",
            href: "https://www.shazam.com/track/601555046/calm-down",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b2/b4/7c/b2b47cf9-d8e2-53f6-5c62-c974d665c95b/22UMGIM08994.rgb.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover Calm Down by Rema.",
            html: "https://www.shazam.com/snippets/email-share/601555046?lang=en&country=GB",
            avatar: "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/23/24/4c/23244c02-6e19-ffa8-6bf1-01170fe9091a/17ea45ee-4d29-478a-87cd-f8d97fbc88c9_ami-identity-9e987f39368f9dd37966c136969aac14-2022-10-10T10-11-43.274Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/601555046",
        },
        images: {
            background:
                "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/23/24/4c/23244c02-6e19-ffa8-6bf1-01170fe9091a/17ea45ee-4d29-478a-87cd-f8d97fbc88c9_ami-identity-9e987f39368f9dd37966c136969aac14-2022-10-10T10-11-43.274Z_cropped.png/800x800cc.jpg",
            coverart:
                "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b2/b4/7c/b2b47cf9-d8e2-53f6-5c62-c974d665c95b/22UMGIM08994.rgb.jpg/400x400cc.jpg",
            coverarthq:
                "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b2/b4/7c/b2b47cf9-d8e2-53f6-5c62-c974d665c95b/22UMGIM08994.rgb.jpg/400x400cc.jpg",
            joecolor: "b:f7f1d1p:020000s:1f1909t:333029q:4a4431",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1614063459",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/70/9f/c7/709fc7e3-8e43-4b42-4f6e-c9f0a94842ce/mzaf_8187227090010990098.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/calm-down/1614063395?i=1614063459&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/calm-down/1614063395?i=1614063459&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "rema",
                id: "42",
                adamid: "1304716885",
            },
        ],
        url: "https://www.shazam.com/track/601555046/calm-down",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "628935200",
        title: "I'm Good (Blue)",
        subtitle: "David Guetta & Bebe Rexha",
        share: {
            subject: "I'm Good (Blue) - David Guetta & Bebe Rexha",
            text: "I used Shazam to discover I'm Good (Blue) by David Guetta & Bebe Rexha.",
            href: "https://www.shazam.com/track/628935200/im-good-blue",
            image: "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/52/cb/10/52cb1071-3533-aad3-4ae7-a6cb44a056ab/5054197425530.jpg/400x400cc.jpg",
            twitter:
                "I used @Shazam to discover I'm Good (Blue) by David Guetta & Bebe Rexha.",
            html: "https://www.shazam.com/snippets/email-share/628935200?lang=en&country=GB",
            avatar: "https://is5-ssl.mzstatic.com/image/thumb/Features115/v4/d4/0c/2d/d40c2d6c-9ebc-b1b3-6cd8-36a9fb9d4eef/mzl.jynpmslg.jpg/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/628935200",
        },
        images: {
            background:
                "https://is5-ssl.mzstatic.com/image/thumb/Features115/v4/d4/0c/2d/d40c2d6c-9ebc-b1b3-6cd8-36a9fb9d4eef/mzl.jynpmslg.jpg/800x800cc.jpg",
            coverart:
                "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/52/cb/10/52cb1071-3533-aad3-4ae7-a6cb44a056ab/5054197425530.jpg/400x400cc.jpg",
            coverarthq:
                "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/52/cb/10/52cb1071-3533-aad3-4ae7-a6cb44a056ab/5054197425530.jpg/400x400cc.jpg",
            joecolor: "b:a700ccp:b1fe64s:8de9dct:afcb78q:92bbd9",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1650558000",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/4f/d1/6e/4fd16e9e-aee3-f565-f7ac-d374959bed75/mzaf_13334718501163194135.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/im-good-blue/1650557353?i=1650558000&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/im-good-blue/1650557353?i=1650558000&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: true,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "david-guetta",
                id: "42",
                adamid: "5557599",
            },
            {
                alias: "bebe-rexha",
                id: "42",
                adamid: "466059563",
            },
        ],
        url: "https://www.shazam.com/track/628935200/im-good-blue",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "498502624",
        title: "Under The Influence",
        subtitle: "Chris Brown",
        share: {
            subject: "Under The Influence - Chris Brown",
            text: "I used Shazam to discover Under The Influence by Chris Brown.",
            href: "https://www.shazam.com/track/498502624/under-the-influence",
            image: "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/97/ec/96/97ec963b-8829-f040-fe40-508069d6044b/196589418449.jpg/400x400cc.jpg",
            twitter:
                "I used @Shazam to discover Under The Influence by Chris Brown.",
            html: "https://www.shazam.com/snippets/email-share/498502624?lang=en&country=GB",
            avatar: "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/54/ca/43/54ca4321-8c0b-099e-f552-950a40a2a899/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/498502624",
        },
        images: {
            background:
                "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/54/ca/43/54ca4321-8c0b-099e-f552-950a40a2a899/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/97/ec/96/97ec963b-8829-f040-fe40-508069d6044b/196589418449.jpg/400x400cc.jpg",
            coverarthq:
                "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/97/ec/96/97ec963b-8829-f040-fe40-508069d6044b/196589418449.jpg/400x400cc.jpg",
            joecolor: "b:000000p:ffffffs:f63710t:cbcbcbq:c42c0d",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1643756110",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/87/a2/c8/87a2c876-dfbd-a57e-2c13-dbd6fc3cba77/mzaf_4085762200601715015.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/under-the-influence/1643755888?i=1643756110&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/under-the-influence/1643755888?i=1643756110&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: true,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "chris-brown",
                id: "42",
                adamid: "95705522",
            },
        ],
        url: "https://www.shazam.com/track/498502624/under-the-influence",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "639053666",
        title: "Lift Me Up (From Black Panther: Wakanda Forever - Music From and Inspired By)",
        subtitle: "Rihanna",
        share: {
            subject:
                "Lift Me Up (From Black Panther: Wakanda Forever - Music From and Inspired By) - Rihanna",
            text: "I used Shazam to discover Lift Me Up (From Black Panther: Wakanda Forever - Music From and Inspired By) by Rihanna.",
            href: "https://www.shazam.com/track/639053666/lift-me-up-from-black-panther-wakanda-forever-music",
            image: "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/46/17/80/461780d4-8620-3e89-7cc4-7f1f08152924/22UM1IM24755.rgb.jpg/400x400cc.jpg",
            twitter:
                "I used @Shazam to discover Lift Me Up (From Black Panther: Wakanda Forever - Music From and Inspired By) by Rihanna.",
            html: "https://www.shazam.com/snippets/email-share/639053666?lang=en&country=GB",
            avatar: "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/c3/64/22/c3642227-2af3-1d93-0721-c91a65e521d4/79d56625-c24d-4599-9919-5d999b69398f_ami-identity-d7c7fc06e25964f71047f919dd682d38-2022-10-28T03-56-00.951Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/639053666",
        },
        images: {
            background:
                "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/c3/64/22/c3642227-2af3-1d93-0721-c91a65e521d4/79d56625-c24d-4599-9919-5d999b69398f_ami-identity-d7c7fc06e25964f71047f919dd682d38-2022-10-28T03-56-00.951Z_cropped.png/800x800cc.jpg",
            coverart:
                "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/46/17/80/461780d4-8620-3e89-7cc4-7f1f08152924/22UM1IM24755.rgb.jpg/400x400cc.jpg",
            coverarthq:
                "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/46/17/80/461780d4-8620-3e89-7cc4-7f1f08152924/22UM1IM24755.rgb.jpg/400x400cc.jpg",
            joecolor: "b:898989p:070707s:161616t:212121q:2d2d2d",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1651763192",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/37/ec/71/37ec7188-c1f5-47c1-43a7-28d32e26f172/mzaf_7868625517086999040.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/lift-me-up-from-black-panther-wakanda-forever-music/1651763191?i=1651763192&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/lift-me-up-from-black-panther-wakanda-forever-music/1651763191?i=1651763192&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "rihanna",
                id: "42",
                adamid: "63346553",
            },
        ],
        url: "https://www.shazam.com/track/639053666/lift-me-up-from-black-panther-wakanda-forever-music",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "40590926",
        title: "Mockingbird",
        subtitle: "Eminem",
        share: {
            subject: "Mockingbird - Eminem",
            text: "I used Shazam to discover Mockingbird by Eminem.",
            href: "https://www.shazam.com/track/40590926/mockingbird",
            image: "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/99/4a/a6/994aa6ee-8232-c580-a7a4-1d4dfd602511/00602498648841.rgb.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover Mockingbird by Eminem.",
            html: "https://www.shazam.com/snippets/email-share/40590926?lang=en&country=GB",
            avatar: "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/87/8e/a0/878ea0a1-ed8d-6fd7-3567-76ab8e6529af/mzl.ayuccyos.jpg/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/40590926",
        },
        images: {
            background:
                "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/87/8e/a0/878ea0a1-ed8d-6fd7-3567-76ab8e6529af/mzl.ayuccyos.jpg/800x800cc.jpg",
            coverart:
                "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/99/4a/a6/994aa6ee-8232-c580-a7a4-1d4dfd602511/00602498648841.rgb.jpg/400x400cc.jpg",
            coverarthq:
                "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/99/4a/a6/994aa6ee-8232-c580-a7a4-1d4dfd602511/00602498648841.rgb.jpg/400x400cc.jpg",
            joecolor: "b:000219p:fefefes:cac9ddt:cbcbd0q:a2a1b5",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1440751633",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/65/c6/15/65c61537-1c2f-e2bd-0f26-2ed9818fb86f/mzaf_9317418265960662555.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/mockingbird/1440751265?i=1440751633&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/mockingbird/1440751265?i=1440751633&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: true,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "eminem",
                id: "42",
                adamid: "111051",
            },
        ],
        url: "https://www.shazam.com/track/40590926/mockingbird",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "607917333",
        title: "SNAP",
        subtitle: "Rosa Linn",
        share: {
            subject: "SNAP - Rosa Linn",
            text: "I used Shazam to discover SNAP by Rosa Linn.",
            href: "https://www.shazam.com/track/607917333/snap",
            image: "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/f7/26/e6f726ab-1827-dec4-1613-394b537db8e4/196589496959.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover SNAP by Rosa Linn.",
            html: "https://www.shazam.com/snippets/email-share/607917333?lang=en&country=GB",
            avatar: "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/75/4c/3b/754c3b37-5a16-c203-f6f6-ff5c3ddfa93e/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/607917333",
        },
        images: {
            background:
                "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/75/4c/3b/754c3b37-5a16-c203-f6f6-ff5c3ddfa93e/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/f7/26/e6f726ab-1827-dec4-1613-394b537db8e4/196589496959.jpg/400x400cc.jpg",
            coverarthq:
                "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/f7/26/e6f726ab-1827-dec4-1613-394b537db8e4/196589496959.jpg/400x400cc.jpg",
            joecolor: "b:f3f0ebp:2d2526s:382a2at:554d4dq:5d5251",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1646526227",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/6e/2b/f3/6e2bf33f-08c9-6286-b8c0-b7e7b8630d1b/mzaf_11852854497905823862.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/snap/1646526226?i=1646526227&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/snap/1646526226?i=1646526227&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "rosa-linn",
                id: "42",
                adamid: "1580652660",
            },
        ],
        url: "https://www.shazam.com/track/607917333/snap",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "630520607",
        title: "STAR WALKIN' (League of Legends Worlds Anthem)",
        subtitle: "Lil Nas X",
        share: {
            subject:
                "STAR WALKIN' (League of Legends Worlds Anthem) - Lil Nas X",
            text: "I used Shazam to discover STAR WALKIN' (League of Legends Worlds Anthem) by Lil Nas X.",
            href: "https://www.shazam.com/track/630520607/star-walkin-league-of-legends-worlds-anthem",
            image: "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/ba/4c/c4/ba4cc4e4-50e5-04f8-b865-389fdf0dfc38/dj.vdbsglhz.jpg/400x400cc.jpg",
            twitter:
                "I used @Shazam to discover STAR WALKIN' (League of Legends Worlds Anthem) by Lil Nas X.",
            html: "https://www.shazam.com/snippets/email-share/630520607?lang=en&country=GB",
            avatar: "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/cc/71/d7/cc71d772-a807-6943-b4e2-c1b92b7b99b8/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/630520607",
        },
        images: {
            background:
                "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/cc/71/d7/cc71d772-a807-6943-b4e2-c1b92b7b99b8/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/ba/4c/c4/ba4cc4e4-50e5-04f8-b865-389fdf0dfc38/dj.vdbsglhz.jpg/400x400cc.jpg",
            coverarthq:
                "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/ba/4c/c4/ba4cc4e4-50e5-04f8-b865-389fdf0dfc38/dj.vdbsglhz.jpg/400x400cc.jpg",
            joecolor: "b:805c39p:f3f1d8s:d4ecdet:dcd3b8q:c3cfbd",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1642613664",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/6d/4b/66/6d4b6697-57ec-f34c-a56d-53c7fe48acea/mzaf_14430168494514608993.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/star-walkin-league-of-legends-worlds-anthem/1642613175?i=1642613664&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/star-walkin-league-of-legends-worlds-anthem/1642613175?i=1642613664&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: true,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "lil-nas-x",
                id: "42",
                adamid: "1400730578",
            },
        ],
        url: "https://www.shazam.com/track/630520607/star-walkin-league-of-legends-worlds-anthem",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "636221067",
        title: "Cough (Odo)",
        subtitle: "Kizz Daniel",
        share: {
            subject: "Cough (Odo) - Kizz Daniel",
            text: "I used Shazam to discover Cough (Odo) by Kizz Daniel.",
            href: "https://www.shazam.com/track/636221067/cough-odo",
            image: "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/ff/ee/a8/ffeea8ba-38af-138f-045f-013bf8072cb2/194690959790_cover.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover Cough (Odo) by Kizz Daniel.",
            html: "https://www.shazam.com/snippets/email-share/636221067?lang=en&country=GB",
            avatar: "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/77/f2/7c/77f27cf1-0c2e-1c21-b652-d7167396ec83/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/636221067",
        },
        images: {
            background:
                "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/77/f2/7c/77f27cf1-0c2e-1c21-b652-d7167396ec83/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/ff/ee/a8/ffeea8ba-38af-138f-045f-013bf8072cb2/194690959790_cover.jpg/400x400cc.jpg",
            coverarthq:
                "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/ff/ee/a8/ffeea8ba-38af-138f-045f-013bf8072cb2/194690959790_cover.jpg/400x400cc.jpg",
            joecolor: "b:fffcf0p:0a0908s:3d2216t:3b3936q:644e42",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1649432597",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/cd/13/2d/cd132d9a-2449-65fe-e094-fb927d7c6c9e/mzaf_16088994795328198867.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/cough-odo/1649432334?i=1649432597&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/cough-odo/1649432334?i=1649432597&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: true,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "kizz-daniel",
                id: "42",
                adamid: "981220084",
            },
        ],
        url: "https://www.shazam.com/track/636221067/cough-odo",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "614204083",
        title: "I Ain't Worried",
        subtitle: "OneRepublic",
        share: {
            subject: "I Ain't Worried - OneRepublic",
            text: "I used Shazam to discover I Ain't Worried by OneRepublic.",
            href: "https://www.shazam.com/track/614204083/i-aint-worried",
            image: "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/14/14/e6141444-6597-4c3a-7ad1-86304528acf4/22UMGIM45569.rgb.jpg/400x400cc.jpg",
            twitter:
                "I used @Shazam to discover I Ain't Worried by OneRepublic.",
            html: "https://www.shazam.com/snippets/email-share/614204083?lang=en&country=GB",
            avatar: "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/cc/0e/16/cc0e16cd-642c-001f-180c-9d6e6080d5c7/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/614204083",
        },
        images: {
            background:
                "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/cc/0e/16/cc0e16cd-642c-001f-180c-9d6e6080d5c7/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/14/14/e6141444-6597-4c3a-7ad1-86304528acf4/22UMGIM45569.rgb.jpg/400x400cc.jpg",
            coverarthq:
                "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/14/14/e6141444-6597-4c3a-7ad1-86304528acf4/22UMGIM45569.rgb.jpg/400x400cc.jpg",
            joecolor: "b:1f1303p:f6e7a8s:f8e193t:cbbd87q:ccb876",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1621817894",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/5c/f0/8a/5cf08acf-596f-c264-affa-9c387a7410e8/mzaf_2952444090080507083.plus.aac.p.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/i-aint-worried/1621817793?i=1621817894&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/i-aint-worried/1621817793?i=1621817894&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "onerepublic",
                id: "42",
                adamid: "260414340",
            },
        ],
        url: "https://www.shazam.com/track/614204083/i-aint-worried",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "70679146",
        title: "Another Love",
        subtitle: "Tom Odell",
        share: {
            subject: "Another Love - Tom Odell",
            text: "I used Shazam to discover Another Love by Tom Odell.",
            href: "https://www.shazam.com/track/70679146/another-love",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f6/2f/c1/f62fc1e3-ac6b-0009-8d3b-52d74821ad53/886443847828.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover Another Love by Tom Odell.",
            html: "https://www.shazam.com/snippets/email-share/70679146?lang=en&country=GB",
            avatar: "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/47/4f/7e/474f7ebe-1442-1dd2-ed17-78808b521f08/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/70679146",
        },
        images: {
            background:
                "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/47/4f/7e/474f7ebe-1442-1dd2-ed17-78808b521f08/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f6/2f/c1/f62fc1e3-ac6b-0009-8d3b-52d74821ad53/886443847828.jpg/400x400cc.jpg",
            coverarthq:
                "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f6/2f/c1/f62fc1e3-ac6b-0009-8d3b-52d74821ad53/886443847828.jpg/400x400cc.jpg",
            joecolor: "b:aba7a4p:080a0ds:06171et:292a2bq:273439",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "608400089",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/72/c5/96/72c596bb-0161-f51d-5779-d8c5c823fabc/mzaf_4624172607665711755.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/another-love/608399874?i=608400089&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/another-love/608399874?i=608400089&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: true,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "tom-odell",
                id: "42",
                adamid: "524929515",
            },
        ],
        url: "https://www.shazam.com/track/70679146/another-love",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "619940012",
        title: "CUFF IT",
        subtitle: "Beyoncé",
        share: {
            subject: "CUFF IT - Beyoncé",
            text: "I used Shazam to discover CUFF IT by Beyoncé.",
            href: "https://www.shazam.com/track/619940012/cuff-it",
            image: "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/05/05/f3/0505f338-9873-feb4-af7f-27a470405e5f/196589246974.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover CUFF IT by Beyoncé.",
            html: "https://www.shazam.com/snippets/email-share/619940012?lang=en&country=GB",
            avatar: "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/e2/10/a7/e210a754-3409-4e42-8fd9-413c1289cbb9/mza_3319038547447377908.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/619940012",
        },
        images: {
            background:
                "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/e2/10/a7/e210a754-3409-4e42-8fd9-413c1289cbb9/mza_3319038547447377908.png/800x800cc.jpg",
            coverart:
                "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/05/05/f3/0505f338-9873-feb4-af7f-27a470405e5f/196589246974.jpg/400x400cc.jpg",
            coverarthq:
                "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/05/05/f3/0505f338-9873-feb4-af7f-27a470405e5f/196589246974.jpg/400x400cc.jpg",
            joecolor: "b:000000p:f9f7f8s:d7eaf5t:c7c6c6q:acbbc4",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1630005850",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/de/0c/d1/de0cd1b7-869d-2552-2693-86e7372f1722/mzaf_9356701807147985180.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/cuff-it/1630005298?i=1630005850&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/cuff-it/1630005298?i=1630005850&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: true,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "beyonc%C3%A9",
                id: "42",
                adamid: "1419227",
            },
        ],
        url: "https://www.shazam.com/track/619940012/cuff-it",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "632546257",
        title: "God's Gonna Cut You Down",
        subtitle: "John Grant",
        share: {
            subject: "God's Gonna Cut You Down - John Grant",
            text: "I used Shazam to discover God's Gonna Cut You Down by John Grant.",
            href: "https://www.shazam.com/track/632546257/gods-gonna-cut-you-down",
            image: "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/86/da/6e/86da6e88-6d70-73fa-d765-009c06413327/5400863096649_cover.jpg/400x400cc.jpg",
            twitter:
                "I used @Shazam to discover God's Gonna Cut You Down by John Grant.",
            html: "https://www.shazam.com/snippets/email-share/632546257?lang=en&country=GB",
            avatar: "https://is3-ssl.mzstatic.com/image/thumb/Features125/v4/4a/03/3d/4a033d62-1a1f-213d-6c65-e4c887d96d3a/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/632546257",
        },
        images: {
            background:
                "https://is3-ssl.mzstatic.com/image/thumb/Features125/v4/4a/03/3d/4a033d62-1a1f-213d-6c65-e4c887d96d3a/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/86/da/6e/86da6e88-6d70-73fa-d765-009c06413327/5400863096649_cover.jpg/400x400cc.jpg",
            coverarthq:
                "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/86/da/6e/86da6e88-6d70-73fa-d765-009c06413327/5400863096649_cover.jpg/400x400cc.jpg",
            joecolor: "b:051111p:edc8abs:e6b18ct:bfa38cq:b99173",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1644889141",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/4b/f1/53/4bf153d5-1b71-22d0-520f-34e41e719354/mzaf_3528933430298395072.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/gods-gonna-cut-you-down/1644889017?i=1644889141&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/gods-gonna-cut-you-down/1644889017?i=1644889141&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "john-grant",
                id: "42",
                adamid: "18905117",
            },
        ],
        url: "https://www.shazam.com/track/632546257/gods-gonna-cut-you-down",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "633467896",
        title: "Anti-Hero",
        subtitle: "Taylor Swift",
        share: {
            subject: "Anti-Hero - Taylor Swift",
            text: "I used Shazam to discover Anti-Hero by Taylor Swift.",
            href: "https://www.shazam.com/track/633467896/anti-hero",
            image: "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/11/33/de/1133deee-070e-98d3-950a-2269807b074e/22UM1IM24801.rgb.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover Anti-Hero by Taylor Swift.",
            html: "https://www.shazam.com/snippets/email-share/633467896?lang=en&country=GB",
            avatar: "https://is4-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/a0/4f/3e/a04f3ec4-4476-1a80-6a3e-6b3641251099/8988402d-d267-4dee-bc51-881135b2ab58_ami-identity-994af5c375f4c3aa96cd6ced4a700799-2022-10-12T00-51-40.037Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/633467896",
        },
        images: {
            background:
                "https://is4-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/a0/4f/3e/a04f3ec4-4476-1a80-6a3e-6b3641251099/8988402d-d267-4dee-bc51-881135b2ab58_ami-identity-994af5c375f4c3aa96cd6ced4a700799-2022-10-12T00-51-40.037Z_cropped.png/800x800cc.jpg",
            coverart:
                "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/11/33/de/1133deee-070e-98d3-950a-2269807b074e/22UM1IM24801.rgb.jpg/400x400cc.jpg",
            coverarthq:
                "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/11/33/de/1133deee-070e-98d3-950a-2269807b074e/22UM1IM24801.rgb.jpg/400x400cc.jpg",
            joecolor: "b:eae7e2p:120b14s:412423t:3d373dq:634b49",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1645937257",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/0e/72/26/0e722602-1a42-cb6f-be43-8b83f8cc4925/mzaf_2139607749166804323.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/anti-hero/1645937249?i=1645937257&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/anti-hero/1645937249?i=1645937257&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "taylor-swift",
                id: "42",
                adamid: "159260351",
            },
        ],
        url: "https://www.shazam.com/track/633467896/anti-hero",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "622105075",
        title: "Quevedo: Bzrp Music Sessions, Vol. 52",
        subtitle: "Bizarrap & Quevedo",
        share: {
            subject:
                "Quevedo: Bzrp Music Sessions, Vol. 52 - Bizarrap & Quevedo",
            text: "I used Shazam to discover Quevedo: Bzrp Music Sessions, Vol. 52 by Bizarrap & Quevedo.",
            href: "https://www.shazam.com/track/622105075/quevedo-bzrp-music-sessions-vol-52",
            image: "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/74/37/3d/74373d24-e999-ea75-e101-b9b21b3887c3/196925240499.jpg/400x400cc.jpg",
            twitter:
                "I used @Shazam to discover Quevedo: Bzrp Music Sessions, Vol. 52 by Bizarrap & Quevedo.",
            html: "https://www.shazam.com/snippets/email-share/622105075?lang=en&country=GB",
            avatar: "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/5a/0d/e5/5a0de5fb-7d27-d211-10a2-337687801092/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/622105075",
        },
        images: {
            background:
                "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/5a/0d/e5/5a0de5fb-7d27-d211-10a2-337687801092/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/74/37/3d/74373d24-e999-ea75-e101-b9b21b3887c3/196925240499.jpg/400x400cc.jpg",
            coverarthq:
                "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/74/37/3d/74373d24-e999-ea75-e101-b9b21b3887c3/196925240499.jpg/400x400cc.jpg",
            joecolor: "b:000000p:faf9f5s:bcc2c1t:c8c7c4q:969b9a",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1632746802",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/0c/62/9e/0c629e98-c1b7-b9f7-5e3b-50d83afefd62/mzaf_8347361243339584774.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/quevedo-bzrp-music-sessions-vol-52/1632746799?i=1632746802&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/quevedo-bzrp-music-sessions-vol-52/1632746799?i=1632746802&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "bizarrap",
                id: "42",
                adamid: "1239658213",
            },
            {
                alias: "quevedo",
                id: "42",
                adamid: "377761784",
            },
        ],
        url: "https://www.shazam.com/track/622105075/quevedo-bzrp-music-sessions-vol-52",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "629608451",
        title: "Rush",
        subtitle: "Ayra Starr",
        share: {
            subject: "Rush - Ayra Starr",
            text: "I used Shazam to discover Rush by Ayra Starr.",
            href: "https://www.shazam.com/track/629608451/rush",
            image: "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/b2/af/f2/b2aff242-703a-2d9d-7146-bbf487fe9a49/5059449090122.png/400x400cc.jpg",
            twitter: "I used @Shazam to discover Rush by Ayra Starr.",
            html: "https://www.shazam.com/snippets/email-share/629608451?lang=en&country=GB",
            avatar: "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/44/de/57/44de5739-5e3f-a831-6c1a-289ec3b667ee/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/629608451",
        },
        images: {
            background:
                "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/44/de/57/44de5739-5e3f-a831-6c1a-289ec3b667ee/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/b2/af/f2/b2aff242-703a-2d9d-7146-bbf487fe9a49/5059449090122.png/400x400cc.jpg",
            coverarthq:
                "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/b2/af/f2/b2aff242-703a-2d9d-7146-bbf487fe9a49/5059449090122.png/400x400cc.jpg",
            joecolor: "b:0f1f1ep:f7d55cs:f27e27t:c8b04fq:c56b25",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1642898573",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/74/b4/ce/74b4cefd-7bb0-27f1-70d8-d8ce05a720ef/mzaf_14315726628197405332.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/rush/1642898371?i=1642898573&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/rush/1642898371?i=1642898573&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "ayra-starr",
                id: "42",
                adamid: "1536429348",
            },
        ],
        url: "https://www.shazam.com/track/629608451/rush",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "629204672",
        title: "Hold Me Closer",
        subtitle: "Elton John & Britney Spears",
        share: {
            subject: "Hold Me Closer - Elton John & Britney Spears",
            text: "I used Shazam to discover Hold Me Closer by Elton John & Britney Spears.",
            href: "https://www.shazam.com/track/629204672/hold-me-closer",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/44/79/8d/44798d46-1503-f69a-03a0-050762fd0e8b/22UMGIM92163.rgb.jpg/400x400cc.jpg",
            twitter:
                "I used @Shazam to discover Hold Me Closer by Elton John & Britney Spears.",
            html: "https://www.shazam.com/snippets/email-share/629204672?lang=en&country=GB",
            avatar: "https://is2-ssl.mzstatic.com/image/thumb/Features125/v4/22/7a/b7/227ab79d-8c57-3622-f414-ba2e83252ee5/mzl.qlkmclct.jpg/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/629204672",
        },
        images: {
            background:
                "https://is2-ssl.mzstatic.com/image/thumb/Features125/v4/22/7a/b7/227ab79d-8c57-3622-f414-ba2e83252ee5/mzl.qlkmclct.jpg/800x800cc.jpg",
            coverart:
                "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/44/79/8d/44798d46-1503-f69a-03a0-050762fd0e8b/22UMGIM92163.rgb.jpg/400x400cc.jpg",
            coverarthq:
                "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/44/79/8d/44798d46-1503-f69a-03a0-050762fd0e8b/22UMGIM92163.rgb.jpg/400x400cc.jpg",
            joecolor: "b:fbf2f5p:000001s:293251t:323032q:535971",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1641082205",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/7a/24/60/7a246091-cef8-1df4-1435-a107ed3c6980/mzaf_7031321512640671226.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/hold-me-closer/1641082201?i=1641082205&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/hold-me-closer/1641082201?i=1641082205&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "elton-john",
                id: "42",
                adamid: "54657",
            },
            {
                alias: "britney-spears",
                id: "42",
                adamid: "217005",
            },
        ],
        url: "https://www.shazam.com/track/629204672/hold-me-closer",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "634714680",
        title: "THE LONELIEST",
        subtitle: "Måneskin",
        share: {
            subject: "THE LONELIEST - Måneskin",
            text: "I used Shazam to discover THE LONELIEST by Måneskin.",
            href: "https://www.shazam.com/track/634714680/the-loneliest",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/02/9e/06/029e0667-367e-f60c-fee3-05588ae95834/196589461865.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover THE LONELIEST by Måneskin.",
            html: "https://www.shazam.com/snippets/email-share/634714680?lang=en&country=GB",
            avatar: "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/7d/ae/8b/7dae8be6-a1ca-37df-9003-a72505d9bad6/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/634714680",
        },
        images: {
            background:
                "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/7d/ae/8b/7dae8be6-a1ca-37df-9003-a72505d9bad6/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/02/9e/06/029e0667-367e-f60c-fee3-05588ae95834/196589461865.jpg/400x400cc.jpg",
            coverarthq:
                "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/02/9e/06/029e0667-367e-f60c-fee3-05588ae95834/196589461865.jpg/400x400cc.jpg",
            joecolor: "b:0a1620p:d5d9dfs:e0ac76t:adb2b9q:b58e65",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1647221210",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/b5/52/bd/b552bda7-a5bf-1c5f-91da-48e0b8783817/mzaf_12548670210804317750.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/the-loneliest/1647221208?i=1647221210&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/the-loneliest/1647221208?i=1647221210&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "m%C3%A5neskin",
                id: "42",
                adamid: "1312874741",
            },
        ],
        url: "https://www.shazam.com/track/634714680/the-loneliest",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "609260140",
        title: "As It Was",
        subtitle: "Harry Styles",
        share: {
            subject: "As It Was - Harry Styles",
            text: "I used Shazam to discover As It Was by Harry Styles.",
            href: "https://www.shazam.com/track/609260140/as-it-was",
            image: "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover As It Was by Harry Styles.",
            html: "https://www.shazam.com/snippets/email-share/609260140?lang=en&country=GB",
            avatar: "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/00/8f/26/008f26ce-ec78-ad42-9303-260ac3b9701c/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/609260140",
        },
        images: {
            background:
                "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/00/8f/26/008f26ce-ec78-ad42-9303-260ac3b9701c/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/400x400cc.jpg",
            coverarthq:
                "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/400x400cc.jpg",
            joecolor: "b:d2c8adp:090f12s:3d2b16t:313431q:5b4a34",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1615585008",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/96/7e/ea/967eea0f-3d8e-9bb6-b4c5-fb255f50b906/mzaf_16046209671483865399.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/as-it-was/1615584999?i=1615585008&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/as-it-was/1615584999?i=1615585008&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "harry-styles",
                id: "42",
                adamid: "471260289",
            },
        ],
        url: "https://www.shazam.com/track/609260140/as-it-was",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "625822346",
        title: "Forget Me",
        subtitle: "Lewis Capaldi",
        share: {
            subject: "Forget Me - Lewis Capaldi",
            text: "I used Shazam to discover Forget Me by Lewis Capaldi.",
            href: "https://www.shazam.com/track/625822346/forget-me",
            image: "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/f9/ad/9f/f9ad9f75-07a3-69d0-fec8-4b2c7c67fe28/22UMGIM83371.rgb.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover Forget Me by Lewis Capaldi.",
            html: "https://www.shazam.com/snippets/email-share/625822346?lang=en&country=GB",
            avatar: "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/d9/20/26/d92026eb-cc98-a8f7-805a-29f676076251/mzl.fuuqiuig.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/625822346",
        },
        images: {
            background:
                "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/d9/20/26/d92026eb-cc98-a8f7-805a-29f676076251/mzl.fuuqiuig.png/800x800cc.jpg",
            coverart:
                "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/f9/ad/9f/f9ad9f75-07a3-69d0-fec8-4b2c7c67fe28/22UMGIM83371.rgb.jpg/400x400cc.jpg",
            coverarthq:
                "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/f9/ad/9f/f9ad9f75-07a3-69d0-fec8-4b2c7c67fe28/22UMGIM83371.rgb.jpg/400x400cc.jpg",
            joecolor: "b:e8d6d6p:0d0a04s:1d1f29t:39332eq:46444c",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1637088297",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/e8/1e/2a/e81e2a3b-a51c-7aa6-8e2c-c499a2bf9eed/mzaf_5665326890495480275.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/forget-me/1637088294?i=1637088297&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/forget-me/1637088294?i=1637088297&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "lewis-capaldi",
                id: "42",
                adamid: "1213405916",
            },
        ],
        url: "https://www.shazam.com/track/625822346/forget-me",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "618550047",
        title: "KU LO SA - A COLORS SHOW",
        subtitle: "Oxlade",
        share: {
            subject: "KU LO SA - A COLORS SHOW - Oxlade",
            text: "I used Shazam to discover KU LO SA - A COLORS SHOW by Oxlade.",
            href: "https://www.shazam.com/track/618550047/ku-lo-sa-a-colors-show",
            image: "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/3c/6c/c7/3c6cc7b9-5bff-e196-2751-665fa5705ab1/196589232137.jpg/400x400cc.jpg",
            twitter:
                "I used @Shazam to discover KU LO SA - A COLORS SHOW by Oxlade.",
            html: "https://www.shazam.com/snippets/email-share/618550047?lang=en&country=GB",
            avatar: "https://is3-ssl.mzstatic.com/image/thumb/Features125/v4/c7/25/b3/c725b311-5818-acb3-f877-b9eec9f5a1fe/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/618550047",
        },
        images: {
            background:
                "https://is3-ssl.mzstatic.com/image/thumb/Features125/v4/c7/25/b3/c725b311-5818-acb3-f877-b9eec9f5a1fe/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/3c/6c/c7/3c6cc7b9-5bff-e196-2751-665fa5705ab1/196589232137.jpg/400x400cc.jpg",
            coverarthq:
                "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/3c/6c/c7/3c6cc7b9-5bff-e196-2751-665fa5705ab1/196589232137.jpg/400x400cc.jpg",
            joecolor: "b:006946p:f8faeds:f1e0c8t:c7ddccq:c0c9ae",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1628125458",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/5d/be/c4/5dbec447-9b92-fe07-999f-259d4afdaf61/mzaf_15530274637544670270.plus.aac.p.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/ku-lo-sa-a-colors-show/1628124903?i=1628125458&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/ku-lo-sa-a-colors-show/1628124903?i=1628125458&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "oxlade",
                id: "42",
                adamid: "968819175",
            },
        ],
        url: "https://www.shazam.com/track/618550047/ku-lo-sa-a-colors-show",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "616481349",
        title: "B.O.T.A. (Baddest Of Them All)",
        subtitle: "Eliza Rose & Interplanetary Criminal",
        share: {
            subject:
                "B.O.T.A. (Baddest Of Them All) - Eliza Rose & Interplanetary Criminal",
            text: "I used Shazam to discover B.O.T.A. (Baddest Of Them All) by Eliza Rose & Interplanetary Criminal.",
            href: "https://www.shazam.com/track/616481349/b-o-t-a-baddest-of-them-all",
            image: "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/f3/df/5b/f3df5b83-5e1a-0fff-b05d-91eae8b071e8/5054197307126.jpg/400x400cc.jpg",
            twitter:
                "I used @Shazam to discover B.O.T.A. (Baddest Of Them All) by Eliza Rose & Interplanetary Criminal.",
            html: "https://www.shazam.com/snippets/email-share/616481349?lang=en&country=GB",
            avatar: "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/e4/4f/00/e44f005f-9e59-66a4-2eab-4c454794ac31/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/616481349",
        },
        images: {
            background:
                "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/e4/4f/00/e44f005f-9e59-66a4-2eab-4c454794ac31/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/f3/df/5b/f3df5b83-5e1a-0fff-b05d-91eae8b071e8/5054197307126.jpg/400x400cc.jpg",
            coverarthq:
                "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/f3/df/5b/f3df5b83-5e1a-0fff-b05d-91eae8b071e8/5054197307126.jpg/400x400cc.jpg",
            joecolor: "b:110858p:2ad28es:f69c50t:25a983q:c87f51",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1639317828",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/4e/79/c3/4e79c381-bd74-4c08-b33e-142c15964286/mzaf_18363535661891469360.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/b-o-t-a-baddest-of-them-all/1639317367?i=1639317828&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/b-o-t-a-baddest-of-them-all/1639317367?i=1639317828&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "eliza-rose",
                id: "42",
                adamid: "156384506",
            },
            {
                alias: "interplanetary-criminal",
                id: "42",
                adamid: "1136192992",
            },
        ],
        url: "https://www.shazam.com/track/616481349/b-o-t-a-baddest-of-them-all",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "621419403",
        title: "Bad Habit",
        subtitle: "Steve Lacy",
        share: {
            subject: "Bad Habit - Steve Lacy",
            text: "I used Shazam to discover Bad Habit by Steve Lacy.",
            href: "https://www.shazam.com/track/621419403/bad-habit",
            image: "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/2a/cb/e3/2acbe3f1-7a65-e2c1-8f12-ba04c6ee05dc/196589099631.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover Bad Habit by Steve Lacy.",
            html: "https://www.shazam.com/snippets/email-share/621419403?lang=en&country=GB",
            avatar: "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/4c/13/f4/4c13f434-29ff-36d5-2d40-d6a97a149ba4/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/621419403",
        },
        images: {
            background:
                "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/4c/13/f4/4c13f434-29ff-36d5-2d40-d6a97a149ba4/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/2a/cb/e3/2acbe3f1-7a65-e2c1-8f12-ba04c6ee05dc/196589099631.jpg/400x400cc.jpg",
            coverarthq:
                "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/2a/cb/e3/2acbe3f1-7a65-e2c1-8f12-ba04c6ee05dc/196589099631.jpg/400x400cc.jpg",
            joecolor: "b:005493p:f4f0efs:e8d3d1t:c3d1dcq:b9bac4",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1631909584",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/78/fa/9e/78fa9e09-f3fd-74ff-2aa9-dfe769d9d872/mzaf_9884762135920880405.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/bad-habit/1631909576?i=1631909584&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/bad-habit/1631909576?i=1631909584&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: true,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "steve-lacy",
                id: "42",
                adamid: "1210275020",
            },
        ],
        url: "https://www.shazam.com/track/621419403/bad-habit",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "631599672",
        title: "Oublie-moi",
        subtitle: "Emkal",
        share: {
            subject: "Oublie-moi - Emkal",
            text: "I used Shazam to discover Oublie-moi by Emkal.",
            href: "https://www.shazam.com/track/631599672/oublie-moi",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/73/c2/2f/73c22f25-5ecb-73b1-0bef-63c718dfee0e/196589479716.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover Oublie-moi by Emkal.",
            html: "https://www.shazam.com/snippets/email-share/631599672?lang=en&country=GB",
            avatar: "https://is3-ssl.mzstatic.com/image/thumb/Features112/v4/75/55/9b/75559bab-7a33-6b3b-49b6-926fb54b509f/mzl.pkvvtmtw.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/631599672",
        },
        images: {
            background:
                "https://is3-ssl.mzstatic.com/image/thumb/Features112/v4/75/55/9b/75559bab-7a33-6b3b-49b6-926fb54b509f/mzl.pkvvtmtw.png/800x800cc.jpg",
            coverart:
                "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/73/c2/2f/73c22f25-5ecb-73b1-0bef-63c718dfee0e/196589479716.jpg/400x400cc.jpg",
            coverarthq:
                "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/73/c2/2f/73c22f25-5ecb-73b1-0bef-63c718dfee0e/196589479716.jpg/400x400cc.jpg",
            joecolor: "b:b7a599p:1a0805s:2a1c1ft:392722q:463837",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1645101542",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/91/2e/a4/912ea423-e93a-1cc8-0603-6ea9bb2c9270/mzaf_15373582857695734226.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/oublie-moi/1645101471?i=1645101542&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/oublie-moi/1645101471?i=1645101542&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: true,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "emkal",
                id: "42",
                adamid: "1436511944",
            },
        ],
        url: "https://www.shazam.com/track/631599672/oublie-moi",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "106479411",
        title: "Tourner Dans Le Vide",
        subtitle: "Indila",
        share: {
            subject: "Tourner Dans Le Vide - Indila",
            text: "I used Shazam to discover Tourner Dans Le Vide by Indila.",
            href: "https://www.shazam.com/track/106479411/tourner-dans-le-vide",
            image: "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/c0/d9/7f/c0d97fd9-2a06-61d8-86c2-96fac328e0b1/00602537735709.rgb.jpg/400x400cc.jpg",
            twitter:
                "I used @Shazam to discover Tourner Dans Le Vide by Indila.",
            html: "https://www.shazam.com/snippets/email-share/106479411?lang=en&country=GB",
            avatar: "https://is4-ssl.mzstatic.com/image/thumb/Features115/v4/f8/f2/e8/f8f2e848-e07f-4597-d918-b1da37a8a85c/mzl.zcdmhnlk.jpg/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/106479411",
        },
        images: {
            background:
                "https://is4-ssl.mzstatic.com/image/thumb/Features115/v4/f8/f2/e8/f8f2e848-e07f-4597-d918-b1da37a8a85c/mzl.zcdmhnlk.jpg/800x800cc.jpg",
            coverart:
                "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/c0/d9/7f/c0d97fd9-2a06-61d8-86c2-96fac328e0b1/00602537735709.rgb.jpg/400x400cc.jpg",
            coverarthq:
                "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/c0/d9/7f/c0d97fd9-2a06-61d8-86c2-96fac328e0b1/00602537735709.rgb.jpg/400x400cc.jpg",
            joecolor: "b:8f8d94p:100c0bs:141110t:292626q:2c2a2a",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1440830556",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/50/ed/6e/50ed6e97-8f42-1d50-2594-95304ba8c233/mzaf_10499799276396112567.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/tourner-dans-le-vide/1440830382?i=1440830556&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/tourner-dans-le-vide/1440830382?i=1440830556&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "indila",
                id: "42",
                adamid: "365001429",
            },
        ],
        url: "https://www.shazam.com/track/106479411/tourner-dans-le-vide",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "11127316",
        title: "Dream On",
        subtitle: "Aerosmith",
        share: {
            subject: "Dream On - Aerosmith",
            text: "I used Shazam to discover Dream On by Aerosmith.",
            href: "https://www.shazam.com/track/11127316/dream-on",
            image: "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/07/85/46/07854681-77e8-87d2-9382-241880e36e1e/074645736020.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover Dream On by Aerosmith.",
            html: "https://www.shazam.com/snippets/email-share/11127316?lang=en&country=GB",
            avatar: "https://is5-ssl.mzstatic.com/image/thumb/Features115/v4/01/f9/9b/01f99bf8-66f8-9f4c-9ef8-91e55728d83a/mza_6690800116101211462.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/11127316",
        },
        images: {
            background:
                "https://is5-ssl.mzstatic.com/image/thumb/Features115/v4/01/f9/9b/01f99bf8-66f8-9f4c-9ef8-91e55728d83a/mza_6690800116101211462.png/800x800cc.jpg",
            coverart:
                "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/07/85/46/07854681-77e8-87d2-9382-241880e36e1e/074645736020.jpg/400x400cc.jpg",
            coverarthq:
                "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/07/85/46/07854681-77e8-87d2-9382-241880e36e1e/074645736020.jpg/400x400cc.jpg",
            joecolor: "b:4e4b76p:faf6eds:cbd2d9t:d7d4d5q:b2b7c5",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "217276979",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/57/7f/26/577f26b5-36de-ccec-389c-47c875e3d134/mzaf_5495031620955907258.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/dream-on/217276710?i=217276979&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/dream-on/217276710?i=217276979&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "aerosmith",
                id: "42",
                adamid: "115386",
            },
        ],
        url: "https://www.shazam.com/track/11127316/dream-on",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "640219867",
        title: "Rich Flex",
        subtitle: "Drake & 21 Savage",
        share: {
            subject: "Rich Flex - Drake & 21 Savage",
            text: "I used Shazam to discover Rich Flex by Drake & 21 Savage.",
            href: "https://www.shazam.com/track/640219867/rich-flex",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/c7/00/3f/c7003f83-3a43-1201-4aec-41be71ba64c5/22UM1IM29131.rgb.jpg/400x400cc.jpg",
            twitter:
                "I used @Shazam to discover Rich Flex by Drake & 21 Savage.",
            html: "https://www.shazam.com/snippets/email-share/640219867?lang=en&country=GB",
            avatar: "https://is3-ssl.mzstatic.com/image/thumb/Features125/v4/b2/bd/8b/b2bd8b72-6528-28e3-7e5f-d637c9c89f4e/mza_17710009188773268806.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/640219867",
        },
        images: {
            background:
                "https://is3-ssl.mzstatic.com/image/thumb/Features125/v4/b2/bd/8b/b2bd8b72-6528-28e3-7e5f-d637c9c89f4e/mza_17710009188773268806.png/800x800cc.jpg",
            coverart:
                "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/c7/00/3f/c7003f83-3a43-1201-4aec-41be71ba64c5/22UM1IM29131.rgb.jpg/400x400cc.jpg",
            coverarthq:
                "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/c7/00/3f/c7003f83-3a43-1201-4aec-41be71ba64c5/22UM1IM29131.rgb.jpg/400x400cc.jpg",
            joecolor: "b:a58e9ep:120a16s:211220t:302531q:3c2b39",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1652999417",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/98/3d/05/983d0599-3603-64ad-90b6-ec7f87366095/mzaf_6408558658627888017.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/rich-flex/1652998965?i=1652999417&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/rich-flex/1652998965?i=1652999417&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: true,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "drake",
                id: "42",
                adamid: "271256",
            },
            {
                alias: "21-savage",
                id: "42",
                adamid: "894820464",
            },
        ],
        url: "https://www.shazam.com/track/640219867/rich-flex",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "636922696",
        title: "Вредина (Mbts Remix)",
        subtitle: "Bakr",
        share: {
            subject: "Вредина (Mbts Remix) - Bakr",
            text: "I used Shazam to discover Вредина (Mbts Remix) by Bakr.",
            href: "https://www.shazam.com/track/636922696/%D0%B2%D1%80%D0%B5%D0%B4%D0%B8%D0%BD%D0%B0-mbts-remix",
            image: "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/cc/81/97/cc8197bf-a016-1e09-8b17-5a60c5ec0e17/cover.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover Вредина (Mbts Remix) by Bakr.",
            html: "https://www.shazam.com/snippets/email-share/636922696?lang=en&country=GB",
            avatar: "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/7e/f8/24/7ef8245b-f8ae-7fa3-c943-ddf6d595cbd7/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/636922696",
        },
        images: {
            background:
                "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/7e/f8/24/7ef8245b-f8ae-7fa3-c943-ddf6d595cbd7/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/cc/81/97/cc8197bf-a016-1e09-8b17-5a60c5ec0e17/cover.jpg/400x400cc.jpg",
            coverarthq:
                "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/cc/81/97/cc8197bf-a016-1e09-8b17-5a60c5ec0e17/cover.jpg/400x400cc.jpg",
            joecolor: "b:9fb96fp:170e38s:281f3bt:323043q:3f3d45",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1651003725",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/69/8e/09/698e0968-8479-e58f-c110-81c0557e6901/mzaf_15516296174971916078.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/%D0%B2%D1%80%D0%B5%D0%B4%D0%B8%D0%BD%D0%B0-mbts-remix/1651003504?i=1651003725&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/%D0%B2%D1%80%D0%B5%D0%B4%D0%B8%D0%BD%D0%B0-mbts-remix/1651003504?i=1651003725&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "bakr",
                id: "42",
                adamid: "1552904011",
            },
        ],
        url: "https://www.shazam.com/track/636922696/%D0%B2%D1%80%D0%B5%D0%B4%D0%B8%D0%BD%D0%B0-mbts-remix",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "558163192",
        title: "The Most Beautiful Boy (Felsmann + Tiley Reinterpretation)",
        subtitle: "The Irrepressibles",
        share: {
            subject:
                "The Most Beautiful Boy (Felsmann + Tiley Reinterpretation) - The Irrepressibles",
            text: "I used Shazam to discover The Most Beautiful Boy (Felsmann + Tiley Reinterpretation) by The Irrepressibles.",
            href: "https://www.shazam.com/track/558163192/the-most-beautiful-boy-felsmann-tiley-reinterpretation",
            image: "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/ad/80/08/ad8008f2-d094-ab2c-e3fb-1af654ac2445/3663729179852.png/400x400cc.jpg",
            twitter:
                "I used @Shazam to discover The Most Beautiful Boy (Felsmann + Tiley Reinterpretation) by The Irrepressibles.",
            html: "https://www.shazam.com/snippets/email-share/558163192?lang=en&country=GB",
            avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/fc/f8/aa/fcf8aa13-ec54-9847-c417-7576493f5cbf/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/558163192",
        },
        images: {
            background:
                "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/fc/f8/aa/fcf8aa13-ec54-9847-c417-7576493f5cbf/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/ad/80/08/ad8008f2-d094-ab2c-e3fb-1af654ac2445/3663729179852.png/400x400cc.jpg",
            coverarthq:
                "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/ad/80/08/ad8008f2-d094-ab2c-e3fb-1af654ac2445/3663729179852.png/400x400cc.jpg",
            joecolor: "b:201523p:fcd9fds:d59bact:d0b2d1q:b18090",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1622422222",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/5b/b1/6a/5bb16ad7-1bf6-9ea2-75a5-858b86f8874a/mzaf_17490254025964448722.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/the-most-beautiful-boy-felsmann-tiley-reinterpretation/1622421965?i=1622422222&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/the-most-beautiful-boy-felsmann-tiley-reinterpretation/1622421965?i=1622422222&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "the-irrepressibles",
                id: "42",
                adamid: "213506136",
            },
        ],
        url: "https://www.shazam.com/track/558163192/the-most-beautiful-boy-felsmann-tiley-reinterpretation",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "629626360",
        title: "Celestial",
        subtitle: "Ed Sheeran",
        share: {
            subject: "Celestial - Ed Sheeran",
            text: "I used Shazam to discover Celestial by Ed Sheeran.",
            href: "https://www.shazam.com/track/629626360/celestial",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/5d/c4/14/5dc414eb-f6ef-0713-789b-7d6da40bf72a/5054197332692.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover Celestial by Ed Sheeran.",
            html: "https://www.shazam.com/snippets/email-share/629626360?lang=en&country=GB",
            avatar: "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/5a/60/84/5a60849d-4fcd-13a6-0715-4621186bab23/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/629626360",
        },
        images: {
            background:
                "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/5a/60/84/5a60849d-4fcd-13a6-0715-4621186bab23/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/5d/c4/14/5dc414eb-f6ef-0713-789b-7d6da40bf72a/5054197332692.jpg/400x400cc.jpg",
            coverarthq:
                "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/5d/c4/14/5dc414eb-f6ef-0713-789b-7d6da40bf72a/5054197332692.jpg/400x400cc.jpg",
            joecolor: "b:18acacp:050506s:1c1c1ct:092727q:1b3939",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1641565456",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/f2/4c/fc/f24cfc19-2d54-6c62-921d-b4427b561a67/mzaf_14570363555431960510.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/celestial/1641565065?i=1641565456&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/celestial/1641565065?i=1641565456&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "ed-sheeran",
                id: "42",
                adamid: "183313439",
            },
        ],
        url: "https://www.shazam.com/track/629626360/celestial",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "606589047",
        title: "Bones",
        subtitle: "Imagine Dragons",
        share: {
            subject: "Bones - Imagine Dragons",
            text: "I used Shazam to discover Bones by Imagine Dragons.",
            href: "https://www.shazam.com/track/606589047/bones",
            image: "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/33/87/c8/3387c827-adaa-681d-bd10-ce7d8e888b9c/22UMGIM21054.rgb.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover Bones by Imagine Dragons.",
            html: "https://www.shazam.com/snippets/email-share/606589047?lang=en&country=GB",
            avatar: "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/83/bd/b7/83bdb7ff-63a6-2252-e04b-ece8ebdc5768/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/606589047",
        },
        images: {
            background:
                "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/83/bd/b7/83bdb7ff-63a6-2252-e04b-ece8ebdc5768/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/33/87/c8/3387c827-adaa-681d-bd10-ce7d8e888b9c/22UMGIM21054.rgb.jpg/400x400cc.jpg",
            coverarthq:
                "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/33/87/c8/3387c827-adaa-681d-bd10-ce7d8e888b9c/22UMGIM21054.rgb.jpg/400x400cc.jpg",
            joecolor: "b:e3dcccp:000000s:211d1at:2d2c28q:48433d",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1612321591",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/85/bd/1e/85bd1eaa-8aa2-2f8c-d84d-bd66a525faf9/mzaf_17880216165394527644.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/bones/1612321587?i=1612321591&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/bones/1612321587?i=1612321591&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "imagine-dragons",
                id: "42",
                adamid: "358714030",
            },
        ],
        url: "https://www.shazam.com/track/606589047/bones",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "621931010",
        title: "Bad Memories (feat. Elley Duhé & FAST BOY)",
        subtitle: "Meduza & James Carter",
        share: {
            subject:
                "Bad Memories (feat. Elley Duhé & FAST BOY) - Meduza & James Carter",
            text: "I used Shazam to discover Bad Memories (feat. Elley Duhé & FAST BOY) by Meduza & James Carter.",
            href: "https://www.shazam.com/track/621931010/bad-memories-feat-elley-duh%C3%A9-fast-boy",
            image: "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/66/b3/57/66b35776-3173-19be-ce25-8f13874d28c2/22UM1IM09505.rgb.jpg/400x400cc.jpg",
            twitter:
                "I used @Shazam to discover Bad Memories (feat. Elley Duhé & FAST BOY) by Meduza & James Carter.",
            html: "https://www.shazam.com/snippets/email-share/621931010?lang=en&country=GB",
            avatar: "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/96/a0/20/96a02073-bb69-4ae5-dd8d-d06c18567c20/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/621931010",
        },
        images: {
            background:
                "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/96/a0/20/96a02073-bb69-4ae5-dd8d-d06c18567c20/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/66/b3/57/66b35776-3173-19be-ce25-8f13874d28c2/22UM1IM09505.rgb.jpg/400x400cc.jpg",
            coverarthq:
                "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/66/b3/57/66b35776-3173-19be-ce25-8f13874d28c2/22UM1IM09505.rgb.jpg/400x400cc.jpg",
            joecolor: "b:ffffffp:000000s:402000t:333333q:664c33",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1648110693",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/8f/ba/a4/8fbaa4a7-380f-624d-c416-0706222c9d2f/mzaf_2131289259514280306.plus.aac.p.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/bad-memories-feat-elley-duh%C3%A9-fast-boy/1648110683?i=1648110693&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/bad-memories-feat-elley-duh%C3%A9-fast-boy/1648110683?i=1648110693&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "meduza",
                id: "42",
                adamid: "1449138676",
            },
            {
                alias: "james-carter",
                id: "42",
                adamid: "723692280",
            },
        ],
        url: "https://www.shazam.com/track/621931010/bad-memories-feat-elley-duh%C3%A9-fast-boy",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "616110998",
        title: "HOTEL LOBBY (Unc & Phew)",
        subtitle: "Quavo & Takeoff",
        share: {
            subject: "HOTEL LOBBY (Unc & Phew) - Quavo & Takeoff",
            text: "I used Shazam to discover HOTEL LOBBY (Unc & Phew) by Quavo & Takeoff.",
            href: "https://www.shazam.com/track/616110998/hotel-lobby-unc-phew",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/6d/1d/e8/6d1de8d2-d45b-309c-e67f-80c895606924/22UM1IM01211.rgb.jpg/400x400cc.jpg",
            twitter:
                "I used @Shazam to discover HOTEL LOBBY (Unc & Phew) by Quavo & Takeoff.",
            html: "https://www.shazam.com/snippets/email-share/616110998?lang=en&country=GB",
            avatar: "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages122/v4/b6/5a/06/b65a063f-4516-1559-9eb1-dc294ceb734e/58af8bad-6dc5-4d1c-98b2-f245d3bef4cd_ami-identity-a1f75b9ed8d7736217c185119b5a09ad-2022-10-05T19-17-12.409Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/616110998",
        },
        images: {
            background:
                "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages122/v4/b6/5a/06/b65a063f-4516-1559-9eb1-dc294ceb734e/58af8bad-6dc5-4d1c-98b2-f245d3bef4cd_ami-identity-a1f75b9ed8d7736217c185119b5a09ad-2022-10-05T19-17-12.409Z_cropped.png/800x800cc.jpg",
            coverart:
                "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/6d/1d/e8/6d1de8d2-d45b-309c-e67f-80c895606924/22UM1IM01211.rgb.jpg/400x400cc.jpg",
            coverarthq:
                "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/6d/1d/e8/6d1de8d2-d45b-309c-e67f-80c895606924/22UM1IM01211.rgb.jpg/400x400cc.jpg",
            joecolor: "b:e1e1e1p:0a0406s:282828t:353032q:4d4d4d",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1646181387",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/73/ee/89/73ee89e7-2191-07e4-66bf-c3394a18e89b/mzaf_16220859431598591435.plus.aac.p.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/hotel-lobby-unc-phew/1646181378?i=1646181387&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/hotel-lobby-unc-phew/1646181378?i=1646181387&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: true,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "quavo",
                id: "42",
                adamid: "673556643",
            },
            {
                alias: "takeoff",
                id: "42",
                adamid: "398509267",
            },
        ],
        url: "https://www.shazam.com/track/616110998/hotel-lobby-unc-phew",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "570449559",
        title: "Mini Mini",
        subtitle: "Punto40 & Marcianeke",
        share: {
            subject: "Mini Mini - Punto40 & Marcianeke",
            text: "I used Shazam to discover Mini Mini by Punto40 & Marcianeke.",
            href: "https://www.shazam.com/track/570449559/mini-mini",
            image: "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/e7/8a/de/e78ade9b-20c0-6e96-1a2c-fe1a9fc3f747/a8865fa3-78ec-4909-b344-9a3e850824ed.jpg/400x400cc.jpg",
            twitter:
                "I used @Shazam to discover Mini Mini by Punto40 & Marcianeke.",
            html: "https://www.shazam.com/snippets/email-share/570449559?lang=en&country=GB",
            snapchat: "https://www.shazam.com/partner/sc/track/570449559",
        },
        images: {
            background:
                "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/e7/8a/de/e78ade9b-20c0-6e96-1a2c-fe1a9fc3f747/a8865fa3-78ec-4909-b344-9a3e850824ed.jpg/400x400cc.jpg",
            coverart:
                "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/e7/8a/de/e78ade9b-20c0-6e96-1a2c-fe1a9fc3f747/a8865fa3-78ec-4909-b344-9a3e850824ed.jpg/400x400cc.jpg",
            coverarthq:
                "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/e7/8a/de/e78ade9b-20c0-6e96-1a2c-fe1a9fc3f747/a8865fa3-78ec-4909-b344-9a3e850824ed.jpg/400x400cc.jpg",
            joecolor: "b:be304dp:f0f7fds:c7d7f0t:e6cfdaq:c5b5cf",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1567469209",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/9c/38/31/9c3831e8-eb07-d926-4c32-c67450e3574e/mzaf_2504474999888191398.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/mini-mini/1567469204?i=1567469209&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/mini-mini/1567469204?i=1567469209&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: true,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "punto40",
                id: "42",
                adamid: "1567469208",
            },
            {
                alias: "marcianeke",
                id: "42",
                adamid: "1489872542",
            },
        ],
        url: "https://www.shazam.com/track/570449559/mini-mini",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "617981262",
        title: "Necesar",
        subtitle: "Mario Fresh & Renvtø",
        share: {
            subject: "Necesar - Mario Fresh & Renvtø",
            text: "I used Shazam to discover Necesar by Mario Fresh & Renvtø.",
            href: "https://www.shazam.com/track/617981262/necesar",
            image: "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/28/0e/2c/280e2cfd-ce8b-3435-9bb4-379dbbde58e5/cover.jpg/400x400cc.jpg",
            twitter:
                "I used @Shazam to discover Necesar by Mario Fresh & Renvtø.",
            html: "https://www.shazam.com/snippets/email-share/617981262?lang=en&country=GB",
            snapchat: "https://www.shazam.com/partner/sc/track/617981262",
        },
        images: {
            background:
                "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/28/0e/2c/280e2cfd-ce8b-3435-9bb4-379dbbde58e5/cover.jpg/400x400cc.jpg",
            coverart:
                "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/28/0e/2c/280e2cfd-ce8b-3435-9bb4-379dbbde58e5/cover.jpg/400x400cc.jpg",
            coverarthq:
                "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/28/0e/2c/280e2cfd-ce8b-3435-9bb4-379dbbde58e5/cover.jpg/400x400cc.jpg",
            joecolor: "b:171723p:ebe5eas:cdcdcdt:c0bcc2q:a8a8ab",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1627365261",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/44/26/f8/4426f8d2-f4c6-2fef-1fba-0ea7892d5453/mzaf_2689247463427380711.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/necesar/1627365123?i=1627365261&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/necesar/1627365123?i=1627365261&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "mario-fresh",
                id: "42",
                adamid: "1259171946",
            },
            {
                alias: "renvt%C3%B8",
                id: "42",
                adamid: "1502104470",
            },
        ],
        url: "https://www.shazam.com/track/617981262/necesar",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "511001043",
        title: "Per Favore",
        subtitle: "Nyv",
        share: {
            subject: "Per Favore - Nyv",
            text: "I used Shazam to discover Per Favore by Nyv.",
            href: "https://www.shazam.com/track/511001043/per-favore",
            image: "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/4c/66/f2/4c66f251-e46c-ce3c-2fff-d688bd05655b/20UMGIM65794.rgb.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover Per Favore by Nyv.",
            html: "https://www.shazam.com/snippets/email-share/511001043?lang=en&country=GB",
            avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/41/18/ff/4118ffd6-543a-3083-ff06-03a9e7f9ff4f/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/511001043",
        },
        images: {
            background:
                "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/41/18/ff/4118ffd6-543a-3083-ff06-03a9e7f9ff4f/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/4c/66/f2/4c66f251-e46c-ce3c-2fff-d688bd05655b/20UMGIM65794.rgb.jpg/400x400cc.jpg",
            coverarthq:
                "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/4c/66/f2/4c66f251-e46c-ce3c-2fff-d688bd05655b/20UMGIM65794.rgb.jpg/400x400cc.jpg",
            joecolor: "b:ffffffp:1e1515s:39241dt:4b4344q:61504a",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1526454258",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f0/e9/e0/f0e9e01e-ffff-927c-b3d2-e56a09d2b665/mzaf_7576588553607195808.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/per-favore/1526454254?i=1526454258&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/per-favore/1526454254?i=1526454258&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "nyv",
                id: "42",
                adamid: "967085715",
            },
        ],
        url: "https://www.shazam.com/track/511001043/per-favore",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "511731769",
        title: "Shinunoga E-Wa",
        subtitle: "Fujii Kaze",
        share: {
            subject: "Shinunoga E-Wa - Fujii Kaze",
            text: "I used Shazam to discover Shinunoga E-Wa by Fujii Kaze.",
            href: "https://www.shazam.com/track/511731769/shinunoga-e-wa",
            image: "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/96/4e/5b/964e5b6e-4766-63ba-7e50-9f8a5bd0569e/20UMGIM17280.rgb.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover Shinunoga E-Wa by Fujii Kaze.",
            html: "https://www.shazam.com/snippets/email-share/511731769?lang=en&country=GB",
            avatar: "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/e5/3f/da/e53fda17-e8d5-5c76-1d9e-bdfb127475e9/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/511731769",
        },
        images: {
            background:
                "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/e5/3f/da/e53fda17-e8d5-5c76-1d9e-bdfb127475e9/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/96/4e/5b/964e5b6e-4766-63ba-7e50-9f8a5bd0569e/20UMGIM17280.rgb.jpg/400x400cc.jpg",
            coverarthq:
                "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/96/4e/5b/964e5b6e-4766-63ba-7e50-9f8a5bd0569e/20UMGIM17280.rgb.jpg/400x400cc.jpg",
            joecolor: "b:abababp:050505s:070707t:262626q:272727",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1505498792",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/09/dc/85/09dc85ff-864d-63fd-277a-bfbbaff0725d/mzaf_15542888245757637983.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/shinunoga-e-wa/1505498769?i=1505498792&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/shinunoga-e-wa/1505498769?i=1505498792&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "fujii-kaze",
                id: "42",
                adamid: "1486113150",
            },
        ],
        url: "https://www.shazam.com/track/511731769/shinunoga-e-wa",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "51013693",
        title: "Just Dance (feat. Colby O'Donis)",
        subtitle: "Lady Gaga",
        share: {
            subject: "Just Dance (feat. Colby O'Donis) - Lady Gaga",
            text: "I used Shazam to discover Just Dance (feat. Colby O'Donis) by Lady Gaga.",
            href: "https://www.shazam.com/track/51013693/just-dance-feat-colby-odonis",
            image: "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/ee/cc/f0/eeccf026-4500-e5cb-1d96-bd5b4f0e23ad/08UMGIM13954.rgb.jpg/400x400cc.jpg",
            twitter:
                "I used @Shazam to discover Just Dance (feat. Colby O'Donis) by Lady Gaga.",
            html: "https://www.shazam.com/snippets/email-share/51013693?lang=en&country=GB",
            avatar: "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/2c/7d/5e/2c7d5ec0-bad6-5fb6-08f2-ccfd94aa2985/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/51013693",
        },
        images: {
            background:
                "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/2c/7d/5e/2c7d5ec0-bad6-5fb6-08f2-ccfd94aa2985/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/ee/cc/f0/eeccf026-4500-e5cb-1d96-bd5b4f0e23ad/08UMGIM13954.rgb.jpg/400x400cc.jpg",
            coverarthq:
                "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/ee/cc/f0/eeccf026-4500-e5cb-1d96-bd5b4f0e23ad/08UMGIM13954.rgb.jpg/400x400cc.jpg",
            joecolor: "b:090d0ep:f0f1f3s:f6e2dat:c1c3c5q:c7b7b1",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1440818653",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/4a/a7/60/4aa76006-d297-2bcb-f201-6f75e9554c21/mzaf_15875176649468788968.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/just-dance-feat-colby-odonis/1440818588?i=1440818653&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/just-dance-feat-colby-odonis/1440818588?i=1440818653&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "lady-gaga",
                id: "42",
                adamid: "277293880",
            },
        ],
        url: "https://www.shazam.com/track/51013693/just-dance-feat-colby-odonis",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "616089001",
        title: "La Bachata",
        subtitle: "Manuel Turizo",
        share: {
            subject: "La Bachata - Manuel Turizo",
            text: "I used Shazam to discover La Bachata by Manuel Turizo.",
            href: "https://www.shazam.com/track/616089001/la-bachata",
            image: "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/df/70/11/df701101-9f0f-3c43-ff6d-2186235d7e9c/196589129123.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover La Bachata by Manuel Turizo.",
            html: "https://www.shazam.com/snippets/email-share/616089001?lang=en&country=GB",
            avatar: "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages122/v4/36/29/5d/36295dc0-c702-27e3-2fae-db87c4bd5f5f/8852142c-0aab-4df5-bfff-6e9ccfaa5311_ami-identity-4535412cf1fdce568ee64eef9a988b9a-2022-10-27T20-27-41.381Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/616089001",
        },
        images: {
            background:
                "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages122/v4/36/29/5d/36295dc0-c702-27e3-2fae-db87c4bd5f5f/8852142c-0aab-4df5-bfff-6e9ccfaa5311_ami-identity-4535412cf1fdce568ee64eef9a988b9a-2022-10-27T20-27-41.381Z_cropped.png/800x800cc.jpg",
            coverart:
                "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/df/70/11/df701101-9f0f-3c43-ff6d-2186235d7e9c/196589129123.jpg/400x400cc.jpg",
            coverarthq:
                "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/df/70/11/df701101-9f0f-3c43-ff6d-2186235d7e9c/196589129123.jpg/400x400cc.jpg",
            joecolor: "b:eef9ffp:09060ds:3b241bt:37373dq:5f4e49",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1624563284",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/c9/3f/2b/c93f2bd7-8e9a-aa9f-c1e9-423654990c18/mzaf_6489444487574180143.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/la-bachata/1624563280?i=1624563284&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/la-bachata/1624563280?i=1624563284&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "manuel-turizo",
                id: "42",
                adamid: "1186116587",
            },
        ],
        url: "https://www.shazam.com/track/616089001/la-bachata",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "581828191",
        title: "Until I Found You",
        subtitle: "Stephen Sanchez",
        share: {
            subject: "Until I Found You - Stephen Sanchez",
            text: "I used Shazam to discover Until I Found You by Stephen Sanchez.",
            href: "https://www.shazam.com/track/581828191/until-i-found-you",
            image: "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/da/5f/06/da5f06f6-29bc-a6b0-2f84-c518d3b38d84/22UMGIM84514.rgb.jpg/400x400cc.jpg",
            twitter:
                "I used @Shazam to discover Until I Found You by Stephen Sanchez.",
            html: "https://www.shazam.com/snippets/email-share/581828191?lang=en&country=GB",
            avatar: "https://is5-ssl.mzstatic.com/image/thumb/Features115/v4/7b/9d/db/7b9ddb5d-c9c4-0320-7432-7aa861148a34/mzl.tgsppzxe.jpg/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/581828191",
        },
        images: {
            background:
                "https://is5-ssl.mzstatic.com/image/thumb/Features115/v4/7b/9d/db/7b9ddb5d-c9c4-0320-7432-7aa861148a34/mzl.tgsppzxe.jpg/800x800cc.jpg",
            coverart:
                "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/da/5f/06/da5f06f6-29bc-a6b0-2f84-c518d3b38d84/22UMGIM84514.rgb.jpg/400x400cc.jpg",
            coverarthq:
                "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/da/5f/06/da5f06f6-29bc-a6b0-2f84-c518d3b38d84/22UMGIM84514.rgb.jpg/400x400cc.jpg",
            joecolor: "b:b3c1cap:1f1f16s:242821t:3d3f3aq:414743",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1638404502",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/20/2e/9a/202e9ab2-56f6-1bcf-0f57-c5eea436bf1e/mzaf_8577263287954913095.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/until-i-found-you/1638404210?i=1638404502&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/until-i-found-you/1638404210?i=1638404502&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "stephen-sanchez",
                id: "42",
                adamid: "1276541872",
            },
        ],
        url: "https://www.shazam.com/track/581828191/until-i-found-you",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "308021058",
        title: "Unstoppable",
        subtitle: "Sia",
        share: {
            subject: "Unstoppable - Sia",
            text: "I used Shazam to discover Unstoppable by Sia.",
            href: "https://www.shazam.com/track/308021058/unstoppable",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bc/13/27/bc13275c-8b26-802d-771b-d15ae00fb530/mzm.hvpwjsvi.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover Unstoppable by Sia.",
            html: "https://www.shazam.com/snippets/email-share/308021058?lang=en&country=GB",
            avatar: "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/fa/52/dd/fa52ddb2-730b-c79d-4b6d-9590a9d75e52/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/308021058",
        },
        images: {
            background:
                "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/fa/52/dd/fa52ddb2-730b-c79d-4b6d-9590a9d75e52/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bc/13/27/bc13275c-8b26-802d-771b-d15ae00fb530/mzm.hvpwjsvi.jpg/400x400cc.jpg",
            coverarthq:
                "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bc/13/27/bc13275c-8b26-802d-771b-d15ae00fb530/mzm.hvpwjsvi.jpg/400x400cc.jpg",
            joecolor: "b:0c0e0dp:eaccc1s:e8c4aat:bda69dq:bca08b",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1055074639",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/fc/b5/ba/fcb5ba61-51da-debf-fbdc-baabc7833715/mzaf_1274083596266863217.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/unstoppable/1055074478?i=1055074639&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/unstoppable/1055074478?i=1055074639&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "sia",
                id: "42",
                adamid: "28721078",
            },
        ],
        url: "https://www.shazam.com/track/308021058/unstoppable",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "615447735",
        title: "BILLIE EILISH.",
        subtitle: "Armani White",
        share: {
            subject: "BILLIE EILISH. - Armani White",
            text: "I used Shazam to discover BILLIE EILISH. by Armani White.",
            href: "https://www.shazam.com/track/615447735/billie-eilish",
            image: "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/c1/ea/3a/c1ea3a25-93af-84fd-2ca6-59e4210f58aa/22UMGIM62666.rgb.jpg/400x400cc.jpg",
            twitter:
                "I used @Shazam to discover BILLIE EILISH. by Armani White.",
            html: "https://www.shazam.com/snippets/email-share/615447735?lang=en&country=GB",
            avatar: "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/80/0f/ac/800fac1c-41aa-8b19-1e6a-605fe1311cb0/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/615447735",
        },
        images: {
            background:
                "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/80/0f/ac/800fac1c-41aa-8b19-1e6a-605fe1311cb0/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/c1/ea/3a/c1ea3a25-93af-84fd-2ca6-59e4210f58aa/22UMGIM62666.rgb.jpg/400x400cc.jpg",
            coverarthq:
                "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/c1/ea/3a/c1ea3a25-93af-84fd-2ca6-59e4210f58aa/22UMGIM62666.rgb.jpg/400x400cc.jpg",
            joecolor: "b:352839p:53ddf1s:30c1f5t:4db9ccq:31a2cf",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1628828521",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/df/50/c3/df50c3aa-451c-7d16-d930-9dd4ff47612c/mzaf_2051892523701935260.plus.aac.p.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/billie-eilish/1628828345?i=1628828521&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/billie-eilish/1628828345?i=1628828521&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: true,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "armani-white",
                id: "42",
                adamid: "1129439109",
            },
        ],
        url: "https://www.shazam.com/track/615447735/billie-eilish",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "612684931",
        title: "Late Night Talking",
        subtitle: "Harry Styles",
        share: {
            subject: "Late Night Talking - Harry Styles",
            text: "I used Shazam to discover Late Night Talking by Harry Styles.",
            href: "https://www.shazam.com/track/612684931/late-night-talking",
            image: "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/400x400cc.jpg",
            twitter:
                "I used @Shazam to discover Late Night Talking by Harry Styles.",
            html: "https://www.shazam.com/snippets/email-share/612684931?lang=en&country=GB",
            avatar: "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/00/8f/26/008f26ce-ec78-ad42-9303-260ac3b9701c/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/612684931",
        },
        images: {
            background:
                "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/00/8f/26/008f26ce-ec78-ad42-9303-260ac3b9701c/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/400x400cc.jpg",
            coverarthq:
                "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/400x400cc.jpg",
            joecolor: "b:d2c8adp:090f12s:3d2b16t:313431q:5b4a34",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1615585006",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/75/cb/12/75cb120e-8c33-42ac-00f0-c5bac8348236/mzaf_3329463923652745812.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/late-night-talking/1615584999?i=1615585006&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/late-night-talking/1615584999?i=1615585006&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "harry-styles",
                id: "42",
                adamid: "471260289",
            },
        ],
        url: "https://www.shazam.com/track/612684931/late-night-talking",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "540439380",
        title: "Lonely Ones",
        subtitle: "LOVA",
        share: {
            subject: "Lonely Ones - LOVA",
            text: "I used Shazam to discover Lonely Ones by LOVA.",
            href: "https://www.shazam.com/track/540439380/lonely-ones",
            image: "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/65/b4/35/65b43551-8656-93a6-217e-445d65b1049e/20UM1IM16875.rgb.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover Lonely Ones by LOVA.",
            html: "https://www.shazam.com/snippets/email-share/540439380?lang=en&country=GB",
            avatar: "https://is4-ssl.mzstatic.com/image/thumb/Features115/v4/36/ff/ed/36ffed76-18b8-6086-c4d0-19ea715cee4d/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/540439380",
        },
        images: {
            background:
                "https://is4-ssl.mzstatic.com/image/thumb/Features115/v4/36/ff/ed/36ffed76-18b8-6086-c4d0-19ea715cee4d/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/65/b4/35/65b43551-8656-93a6-217e-445d65b1049e/20UM1IM16875.rgb.jpg/400x400cc.jpg",
            coverarthq:
                "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/65/b4/35/65b43551-8656-93a6-217e-445d65b1049e/20UM1IM16875.rgb.jpg/400x400cc.jpg",
            joecolor: "b:c9bfc0p:0e0909s:2a282dt:342d2dq:4a464a",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1552985302",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/da/1b/f6/da1bf687-81a0-5741-0013-eceeac2c7e8c/mzaf_10790801174951168852.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/lonely-ones/1552985044?i=1552985302&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/lonely-ones/1552985044?i=1552985302&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: true,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "lova",
                id: "42",
                adamid: "1258679346",
            },
        ],
        url: "https://www.shazam.com/track/540439380/lonely-ones",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "615128855",
        title: "Miss You",
        subtitle: "Southstar",
        share: {
            subject: "Miss You - Southstar",
            text: "I used Shazam to discover Miss You by Southstar.",
            href: "https://www.shazam.com/track/615128855/miss-you",
            image: "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/ec/cc/e4/eccce44b-f876-a945-9fb8-68530e047e94/196589363671.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover Miss You by Southstar.",
            html: "https://www.shazam.com/snippets/email-share/615128855?lang=en&country=GB",
            avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/73/f3/01/73f3019c-9826-9e3a-d535-6d3fac00cc18/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/615128855",
        },
        images: {
            background:
                "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/73/f3/01/73f3019c-9826-9e3a-d535-6d3fac00cc18/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/ec/cc/e4/eccce44b-f876-a945-9fb8-68530e047e94/196589363671.jpg/400x400cc.jpg",
            coverarthq:
                "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/ec/cc/e4/eccce44b-f876-a945-9fb8-68530e047e94/196589363671.jpg/400x400cc.jpg",
            joecolor: "b:05040ap:cac49fs:ccb885t:a29d81q:a4946c",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1637438976",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/94/2b/79/942b79a3-e0c0-99f3-7d7b-82d00f1baa29/mzaf_2505306192805367677.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/miss-you/1637438960?i=1637438976&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/miss-you/1637438960?i=1637438976&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: true,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "southstar",
                id: "42",
                adamid: "64363803",
            },
        ],
        url: "https://www.shazam.com/track/615128855/miss-you",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "625106155",
        title: "Under The Influence (Body Language)",
        subtitle: "Chris Brown",
        share: {
            subject: "Under The Influence (Body Language) - Chris Brown",
            text: "I used Shazam to discover Under The Influence (Body Language) by Chris Brown.",
            href: "https://www.shazam.com/track/625106155/under-the-influence-body-language",
            image: "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/97/ec/96/97ec963b-8829-f040-fe40-508069d6044b/196589418449.jpg/400x400cc.jpg",
            twitter:
                "I used @Shazam to discover Under The Influence (Body Language) by Chris Brown.",
            html: "https://www.shazam.com/snippets/email-share/625106155?lang=en&country=GB",
            avatar: "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/54/ca/43/54ca4321-8c0b-099e-f552-950a40a2a899/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/625106155",
        },
        images: {
            background:
                "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/54/ca/43/54ca4321-8c0b-099e-f552-950a40a2a899/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/97/ec/96/97ec963b-8829-f040-fe40-508069d6044b/196589418449.jpg/400x400cc.jpg",
            coverarthq:
                "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/97/ec/96/97ec963b-8829-f040-fe40-508069d6044b/196589418449.jpg/400x400cc.jpg",
            joecolor: "b:000000p:ffffffs:f63710t:cbcbcbq:c42c0d",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1643756101",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/3b/7b/06/3b7b0648-d0bc-aa64-912f-45541bb1de12/mzaf_17261939321764395679.plus.aac.p.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/under-the-influence-body-language/1643755888?i=1643756101&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/under-the-influence-body-language/1643755888?i=1643756101&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: true,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "chris-brown",
                id: "42",
                adamid: "95705522",
            },
        ],
        url: "https://www.shazam.com/track/625106155/under-the-influence-body-language",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "607910713",
        title: "Ferrari",
        subtitle: "James Hype & Miggy Dela Rosa",
        share: {
            subject: "Ferrari - James Hype & Miggy Dela Rosa",
            text: "I used Shazam to discover Ferrari by James Hype & Miggy Dela Rosa.",
            href: "https://www.shazam.com/track/607910713/ferrari",
            image: "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/a9/02/ca/a902ca66-530d-d678-077c-17d9da7533ef/22UMGIM36635.rgb.jpg/400x400cc.jpg",
            twitter:
                "I used @Shazam to discover Ferrari by James Hype & Miggy Dela Rosa.",
            html: "https://www.shazam.com/snippets/email-share/607910713?lang=en&country=GB",
            avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/77/13/f4/7713f41b-e31e-32fe-df64-09671eb06661/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/607910713",
        },
        images: {
            background:
                "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/77/13/f4/7713f41b-e31e-32fe-df64-09671eb06661/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/a9/02/ca/a902ca66-530d-d678-077c-17d9da7533ef/22UMGIM36635.rgb.jpg/400x400cc.jpg",
            coverarthq:
                "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/a9/02/ca/a902ca66-530d-d678-077c-17d9da7533ef/22UMGIM36635.rgb.jpg/400x400cc.jpg",
            joecolor: "b:121212p:ffffffs:fa0d13t:cfcfcfq:cb0e13",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1617280597",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/12/c3/5d/12c35dee-5ea7-9c51-580a-f2c5b85b9705/mzaf_2493936288894570132.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/ferrari/1617280385?i=1617280597&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/ferrari/1617280385?i=1617280597&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "james-hype",
                id: "42",
                adamid: "925734064",
            },
            {
                alias: "miggy-dela-rosa",
                id: "42",
                adamid: "762567296",
            },
        ],
        url: "https://www.shazam.com/track/607910713/ferrari",
        highlightsurls: {},
        properties: {},
    },
    {
        layout: "5",
        type: "MUSIC",
        key: "508629282",
        title: "After Hours",
        subtitle: "The Weeknd",
        share: {
            subject: "After Hours - The Weeknd",
            text: "I used Shazam to discover After Hours by The Weeknd.",
            href: "https://www.shazam.com/track/508629282/after-hours",
            image: "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/6f/bc/e6/6fbce6c4-c38c-72d8-4fd0-66cfff32f679/20UMGIM12176.rgb.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover After Hours by The Weeknd.",
            html: "https://www.shazam.com/snippets/email-share/508629282?lang=en&country=GB",
            avatar: "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/55/f8/5c/55f85c40-3e34-e35f-ed2a-cf975e622059/pr_source.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/508629282",
        },
        images: {
            background:
                "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/55/f8/5c/55f85c40-3e34-e35f-ed2a-cf975e622059/pr_source.png/800x800cc.jpg",
            coverart:
                "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/6f/bc/e6/6fbce6c4-c38c-72d8-4fd0-66cfff32f679/20UMGIM12176.rgb.jpg/400x400cc.jpg",
            coverarthq:
                "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/6f/bc/e6/6fbce6c4-c38c-72d8-4fd0-66cfff32f679/20UMGIM12176.rgb.jpg/400x400cc.jpg",
            joecolor: "b:090a0ep:d9e4dbs:b2dbc1t:afb9b2q:90b19d",
        },
        hub: {
            type: "APPLEMUSIC",
            image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
            actions: [
                {
                    name: "apple",
                    type: "applemusicplay",
                    id: "1499378615",
                },
                {
                    name: "apple",
                    type: "uri",
                    uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/62/17/35/62173591-9484-ffc1-7f39-3e5d1a1a93f1/mzaf_4267588982028589057.plus.aac.ep.m4a",
                },
            ],
            options: [
                {
                    caption: "OPEN",
                    actions: [
                        {
                            name: "hub:applemusic:deeplink",
                            type: "applemusicopen",
                            uri: "https://music.apple.com/gb/album/after-hours/1499378108?i=1499378615&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                        {
                            name: "hub:applemusic:deeplink",
                            type: "uri",
                            uri: "https://music.apple.com/gb/album/after-hours/1499378108?i=1499378615&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                        },
                    ],
                    beacondata: {
                        type: "open",
                        providername: "applemusic",
                    },
                    image: "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                    type: "open",
                    listcaption: "Open in Apple Music",
                    overflowimage:
                        "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                    colouroverflowimage: false,
                    providername: "applemusic",
                },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
        },
        artists: [
            {
                alias: "the-weeknd",
                id: "42",
                adamid: "479756766",
            },
        ],
        url: "https://www.shazam.com/track/508629282/after-hours",
        highlightsurls: {},
        properties: {},
    },
];
export let artistData = [
    {
        artists: {
            136975: {
                id: "136975",
                type: "artists",
                href: "/v1/catalog/us/artists/136975?l=en-US",
                attributes: {
                    genreNames: ["Rock"],
                    name: "The Beatles",
                    artwork: {
                        width: 2400,
                        url: "https://is3-ssl.mzstatic.com/image/thumb/Features125/v4/02/1f/ea/021fea7b-9acd-3dd9-c833-68781a5c764a/mza_12805048796106822393.png/440x440bb.jpg",
                        height: 2400,
                        textColor3: "3c3739",
                        textColor2: "131614",
                        textColor4: "424443",
                        textColor1: "0c0507",
                        bgColor: "fffdff",
                        hasP3: false,
                    },
                    url: "https://music.apple.com/us/artist/the-beatles/136975",
                },
                relationships: {
                    albums: {
                        href: "/v1/catalog/us/artists/136975/albums?l=en-US",
                        next: "/v1/catalog/us/artists/136975/albums?l=en-US&offset=25",
                        data: [
                            {
                                id: "1474815798",
                                type: "albums",
                                href: "/v1/catalog/us/albums/1474815798?l=en-US",
                            },
                            {
                                id: "1573250333",
                                type: "albums",
                                href: "/v1/catalog/us/albums/1573250333?l=en-US",
                            },
                            {
                                id: "1441164426",
                                type: "albums",
                                href: "/v1/catalog/us/albums/1441164426?l=en-US",
                            },
                            {
                                id: "1441133180",
                                type: "albums",
                                href: "/v1/catalog/us/albums/1441133180?l=en-US",
                            },
                            {
                                id: "1441164359",
                                type: "albums",
                                href: "/v1/catalog/us/albums/1441164359?l=en-US",
                            },
                            {
                                id: "1642995371",
                                type: "albums",
                                href: "/v1/catalog/us/albums/1642995371?l=en-US",
                            },
                            {
                                id: "1643394501",
                                type: "albums",
                                href: "/v1/catalog/us/albums/1643394501?l=en-US",
                            },
                            {
                                id: "1441164604",
                                type: "albums",
                                href: "/v1/catalog/us/albums/1441164604?l=en-US",
                            },
                            {
                                id: "1441164524",
                                type: "albums",
                                href: "/v1/catalog/us/albums/1441164524?l=en-US",
                            },
                            {
                                id: "1441164670",
                                type: "albums",
                                href: "/v1/catalog/us/albums/1441164670?l=en-US",
                            },
                            {
                                id: "1441163490",
                                type: "albums",
                                href: "/v1/catalog/us/albums/1441163490?l=en-US",
                            },
                            {
                                id: "1441133100",
                                type: "albums",
                                href: "/v1/catalog/us/albums/1441133100?l=en-US",
                            },
                            {
                                id: "1440833098",
                                type: "albums",
                                href: "/v1/catalog/us/albums/1440833098?l=en-US",
                            },
                            {
                                id: "1441164416",
                                type: "albums",
                                href: "/v1/catalog/us/albums/1441164416?l=en-US",
                            },
                            {
                                id: "1441164816",
                                type: "albums",
                                href: "/v1/catalog/us/albums/1441164816?l=en-US",
                            },
                            {
                                id: "1441164495",
                                type: "albums",
                                href: "/v1/catalog/us/albums/1441164495?l=en-US",
                            },
                            {
                                id: "1582219768",
                                type: "albums",
                                href: "/v1/catalog/us/albums/1582219768?l=en-US",
                            },
                            {
                                id: "1474833332",
                                type: "albums",
                                href: "/v1/catalog/us/albums/1474833332?l=en-US",
                            },
                            {
                                id: "1436905161",
                                type: "albums",
                                href: "/v1/catalog/us/albums/1436905161?l=en-US",
                            },
                            {
                                id: "1441133181",
                                type: "albums",
                                href: "/v1/catalog/us/albums/1441133181?l=en-US",
                            },
                            {
                                id: "1441133389",
                                type: "albums",
                                href: "/v1/catalog/us/albums/1441133389?l=en-US",
                            },
                            {
                                id: "1441164525",
                                type: "albums",
                                href: "/v1/catalog/us/albums/1441164525?l=en-US",
                            },
                            {
                                id: "1441164362",
                                type: "albums",
                                href: "/v1/catalog/us/albums/1441164362?l=en-US",
                            },
                            {
                                id: "1441132965",
                                type: "albums",
                                href: "/v1/catalog/us/albums/1441132965?l=en-US",
                            },
                            {
                                id: "1441165005",
                                type: "albums",
                                href: "/v1/catalog/us/albums/1441165005?l=en-US",
                            },
                        ],
                    },
                },
                views: {
                    "top-songs": {
                        href: "/v1/catalog/us/artists/136975/view/top-songs?l=en-US",
                        next: "/v1/catalog/us/artists/136975/view/top-songs?l=en-US&offset=20",
                        attributes: {
                            title: "Top Songs",
                        },
                        data: [
                            {
                                id: "1441164805",
                                type: "songs",
                                href: "/v1/catalog/us/songs/1441164805?l=en-US",
                            },
                            {
                                id: "1474815898",
                                type: "songs",
                                href: "/v1/catalog/us/songs/1474815898?l=en-US",
                            },
                            {
                                id: "1441164589",
                                type: "songs",
                                href: "/v1/catalog/us/songs/1441164589?l=en-US",
                            },
                            {
                                id: "1441133277",
                                type: "songs",
                                href: "/v1/catalog/us/songs/1441133277?l=en-US",
                            },
                            {
                                id: "1441133834",
                                type: "songs",
                                href: "/v1/catalog/us/songs/1441133834?l=en-US",
                            },
                            {
                                id: "1474815799",
                                type: "songs",
                                href: "/v1/catalog/us/songs/1474815799?l=en-US",
                            },
                            {
                                id: "1582223667",
                                type: "songs",
                                href: "/v1/catalog/us/songs/1582223667?l=en-US",
                            },
                            {
                                id: "1441165136",
                                type: "songs",
                                href: "/v1/catalog/us/songs/1441165136?l=en-US",
                            },
                            {
                                id: "1441164829",
                                type: "songs",
                                href: "/v1/catalog/us/songs/1441164829?l=en-US",
                            },
                            {
                                id: "1441164430",
                                type: "songs",
                                href: "/v1/catalog/us/songs/1441164430?l=en-US",
                            },
                            {
                                id: "1441164738",
                                type: "songs",
                                href: "/v1/catalog/us/songs/1441164738?l=en-US",
                            },
                            {
                                id: "1441133644",
                                type: "songs",
                                href: "/v1/catalog/us/songs/1441133644?l=en-US",
                            },
                            {
                                id: "1441164536",
                                type: "songs",
                                href: "/v1/catalog/us/songs/1441164536?l=en-US",
                            },
                            {
                                id: "1441164806",
                                type: "songs",
                                href: "/v1/catalog/us/songs/1441164806?l=en-US",
                            },
                            {
                                id: "1441163771",
                                type: "songs",
                                href: "/v1/catalog/us/songs/1441163771?l=en-US",
                            },
                            {
                                id: "1441133613",
                                type: "songs",
                                href: "/v1/catalog/us/songs/1441133613?l=en-US",
                            },
                            {
                                id: "1474815801",
                                type: "songs",
                                href: "/v1/catalog/us/songs/1474815801?l=en-US",
                            },
                            {
                                id: "1441133632",
                                type: "songs",
                                href: "/v1/catalog/us/songs/1441133632?l=en-US",
                            },
                            {
                                id: "1573250861",
                                type: "songs",
                                href: "/v1/catalog/us/songs/1573250861?l=en-US",
                            },
                            {
                                id: "1474833934",
                                type: "songs",
                                href: "/v1/catalog/us/songs/1474833934?l=en-US",
                            },
                        ],
                    },
                    "latest-release": {
                        href: "/v1/catalog/us/artists/136975/view/latest-release?l=en-US",
                        attributes: {
                            title: "Latest Release",
                        },
                        data: [
                            {
                                id: "1643394501",
                                type: "albums",
                                href: "/v1/catalog/us/albums/1643394501?l=en-US",
                            },
                        ],
                    },
                },
                meta: {
                    views: {
                        order: ["latest-release", "top-songs"],
                    },
                },
            },
        },
        albums: {
            1436905161: {
                id: "1436905161",
                type: "albums",
                href: "/v1/catalog/us/albums/1436905161?l=en-US",
                attributes: {
                    copyright:
                        "This Compilation ℗ 2018 Calderstone Productions Limited (a Division of Universal Music Group) / Apple Corps Limited",
                    genreNames: [
                        "Rock",
                        "Music",
                        "Singer/Songwriter",
                        "Arena Rock",
                        "Psychedelic",
                        "Pop",
                        "Pop/Rock",
                        "Soft Rock",
                        "Rock & Roll",
                        "Hard Rock",
                    ],
                    releaseDate: "1968-11-22",
                    isMasteredForItunes: true,
                    upc: "00602577087097",
                    artwork: {
                        width: 3000,
                        url: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/6c/5d/57/6c5d57e7-c65b-3c3f-8ff5-7132b1599203/00602577087097.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "3b3b3a",
                        textColor2: "0a0a09",
                        textColor4: "3b3b3a",
                        textColor1: "0a0a09",
                        bgColor: "ffffff",
                        hasP3: false,
                    },
                    playParams: {
                        id: "1436905161",
                        kind: "album",
                    },
                    url: "https://music.apple.com/us/album/the-beatles-white-album-super-deluxe-edition-2018/1436905161",
                    recordLabel: "UMC (Universal Music Catalogue)",
                    isCompilation: false,
                    trackCount: 107,
                    isPrerelease: false,
                    audioTraits: [
                        "hi-res-lossless",
                        "lossless",
                        "lossy-stereo",
                    ],
                    isSingle: false,
                    name: "The Beatles (White Album) (Super Deluxe Edition) [2018 Remix & Remaster]",
                    artistName: "The Beatles",
                    editorialNotes: {
                        standard:
                            "In The Beatles’ long and winding history, their self-titled 1968 album is considered by many to be the beginning of the end. Not musically, of course—raw and sprawling, “The White Album” contains some of their richest and most enduring songs—but insofar as the LP showed they were starting to work and develop distinct styles apart from one another. But to hear Giles Martin, son of the late longtime Beatles producer George Martin, tell it, the truth may be more complicated. His evidence: This new 107-track collection he has overseen, featuring a fresh mix of the original album, freewheeling studio outtakes, and the 27 holy-grail acoustic “Esher demos” largely recorded at George Harrison’s house following the band’s consciousness-expanding off-site in India. To Martin, these loose, candid recordings show a band playing off one another’s chemistry in the studio, working together with humor and camaraderie to spare. “You can’t make a record like ‘The White Album’ if you’re arguing,” he says. Martin tells Apple Music which tracks best prove his theory, and how this set offers insight for completists and casual fans alike.<br />\n<b>Julia</b> \n“There’s a version where John plays for my dad and he’s trying to work out whether to fingerpick it or strum it, and you hear them having a conversation. No one even knew this existed, because it was on the back end of a tape with no name on it. When Paul came in, this was the first thing he wanted to listen to, because he was there with John when they were recording it. And it’s like, ‘Wait a second—I thought you all went to different studios...’”<br />\n<b>Cry Baby Cry</b> \n“We have the acoustic version which John sings for the Esher demos, and then there’s a version on the outtakes which is almost like Pink Floyd. The final mix we did actually sounds more like the demo in some ways. They really valued each other as musicians and contributors to everything they did, and that’s what you hear in ‘The White Album’—the way the other members of the band added to the record to create the final version.”<br />\n<b>Happiness Is a Warm Gun</b> \n“There’s conversations you hear after a number of takes where John says to George, ‘It’s getting better, but it’s not getting any easier, or it’s not getting any more fun.’ And George goes, ‘But it’s getting better <i>and</i> it’s getting more fun.’” <br />\n<b>Blackbird</b> \n“You hear Paul working out the way he’s going to sing it, and that’s the beauty of this: We live in a world where everything has to be perfect and you forget that great music is made mainly by people and by voices and by instruments in a room. And by listening to this body of material, you realize it’s actually simple—if you’re very good—to make a very good record. It’s just that, sadly, not many of us are very good.”",
                        short: "The man behind the 107-track collection debunks some myths.",
                    },
                    isComplete: true,
                },
            },
            1440833098: {
                id: "1440833098",
                type: "albums",
                href: "/v1/catalog/us/albums/1440833098?l=en-US",
                attributes: {
                    copyright:
                        "This Compilation ℗ 2015 Calderstone Productions Limited (a division of Universal Music Group) / Apple Corps Ltd.",
                    genreNames: [
                        "Rock",
                        "Music",
                        "Pop",
                        "Pop/Rock",
                        "British Invasion",
                        "Arena Rock",
                        "Singer/Songwriter",
                        "Folk-Rock",
                        "Soft Rock",
                        "Rock & Roll",
                        "Psychedelic",
                    ],
                    releaseDate: "2000-11-13",
                    upc: "00602547657725",
                    isMasteredForItunes: true,
                    artwork: {
                        width: 1500,
                        url: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f2/98/fb/f298fb48-1e0e-6ad4-4cff-fb824b77f02e/15UMGIM59587.rgb.jpg/440x440bb.jpg",
                        height: 1500,
                        textColor3: "f0b400",
                        textColor2: "ffb81d",
                        textColor4: "f09417",
                        textColor1: "ffe000",
                        bgColor: "b60600",
                        hasP3: false,
                    },
                    playParams: {
                        id: "1440833098",
                        kind: "album",
                    },
                    url: "https://music.apple.com/us/album/1/1440833098",
                    recordLabel: "UMC (Universal Music Catalogue)",
                    isCompilation: false,
                    trackCount: 27,
                    isPrerelease: false,
                    audioTraits: [
                        "atmos",
                        "lossless",
                        "lossy-stereo",
                        "spatial",
                    ],
                    isSingle: false,
                    name: "1",
                    artistName: "The Beatles",
                    isComplete: true,
                },
            },
            1441132965: {
                id: "1441132965",
                type: "albums",
                href: "/v1/catalog/us/albums/1441132965?l=en-US",
                attributes: {
                    copyright:
                        "This Compilation ℗ 2010 Calderstone Productions Limited (a division of Universal Music Group)",
                    genreNames: [
                        "Rock",
                        "Music",
                        "Pop",
                        "Soft Rock",
                        "Pop/Rock",
                        "British Invasion",
                        "Rock & Roll",
                        "Psychedelic",
                        "Singer/Songwriter",
                        "Folk-Rock",
                    ],
                    releaseDate: "1973-04-02",
                    isMasteredForItunes: true,
                    upc: "00602567725527",
                    artwork: {
                        width: 3000,
                        url: "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/2a/4a/e6/2a4ae63d-ada7-fa57-6f16-02eebcf72f95/18UMGIM29770.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "e5ccce",
                        textColor2: "fff9f6",
                        textColor4: "f1c8c7",
                        textColor1: "f0feff",
                        bgColor: "bd040c",
                        hasP3: false,
                    },
                    playParams: {
                        id: "1441132965",
                        kind: "album",
                    },
                    url: "https://music.apple.com/us/album/the-beatles-1962-1966-the-red-album/1441132965",
                    recordLabel: "UMC (Universal Music Catalogue)",
                    isCompilation: false,
                    trackCount: 26,
                    isPrerelease: false,
                    audioTraits: ["lossless", "lossy-stereo"],
                    isSingle: false,
                    name: "The Beatles 1962-1966 (The Red Album)",
                    artistName: "The Beatles",
                    editorialNotes: {
                        standard:
                            'The 1973 collection known to fans as "The Red Album" (released simultaneously with "The Blue Album") follows the band from their debut up until the release of <i>Revolver</i>. From the Beatlemania that brought them worldwide popularity to the bold experimentation of their mid-period, this is an essential overview of the band\'s rapid ascent as musical adventurers. ',
                        short: "The band’s rapid ascent as musical adventurers. ",
                    },
                    isComplete: true,
                },
            },
            1441133100: {
                id: "1441133100",
                type: "albums",
                href: "/v1/catalog/us/albums/1441133100?l=en-US",
                attributes: {
                    copyright:
                        "This Compilation ℗ 2010 Calderstone Productions Limited (a division of Universal Music Group)",
                    genreNames: [
                        "Rock",
                        "Music",
                        "Pop",
                        "Pop/Rock",
                        "Psychedelic",
                        "Hard Rock",
                        "Rock & Roll",
                        "Soft Rock",
                        "Arena Rock",
                    ],
                    releaseDate: "1973-04-02",
                    upc: "00602567725572",
                    isMasteredForItunes: true,
                    artwork: {
                        width: 3000,
                        url: "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/a6/8b/65/a68b657c-cac6-68e6-3bde-b79d58fbc795/18UMGIM30762.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "c6daec",
                        textColor2: "d1dbed",
                        textColor4: "a9bede",
                        textColor1: "f5feff",
                        bgColor: "0c4ca3",
                        hasP3: false,
                    },
                    playParams: {
                        id: "1441133100",
                        kind: "album",
                    },
                    url: "https://music.apple.com/us/album/the-beatles-1967-1970-the-blue-album/1441133100",
                    recordLabel: "UMC (Universal Music Catalogue)",
                    isCompilation: false,
                    trackCount: 28,
                    isPrerelease: false,
                    audioTraits: ["lossless", "lossy-stereo"],
                    isSingle: false,
                    name: "The Beatles 1967-1970 (The Blue Album)",
                    artistName: "The Beatles",
                    editorialNotes: {
                        standard:
                            'Released just three years after the band\'s official break-up, "The Blue Album" put The Beatles\' later-year tracks into one package (released simultaneously with "The Red Album") featuring key songs from the group’s albums as well as standalone singles. With music that signified the group\'s own development as well as the culture around them, this selection of material from albums such as <i>Sgt. Pepper</i> and <i>Abbey Road</i> contains some of their most radical studio experiments and most loved songs.',
                        short: "Some of their most radical studio experiments and most loved songs.",
                    },
                    isComplete: true,
                },
            },
            1441133180: {
                id: "1441133180",
                type: "albums",
                href: "/v1/catalog/us/albums/1441133180?l=en-US",
                attributes: {
                    copyright:
                        "This Compilation ℗ 2009 Calderstone Productions Limited (a division of Universal Music Group)",
                    genreNames: [
                        "Rock",
                        "Music",
                        "Hard Rock",
                        "Pop",
                        "Pop/Rock",
                        "Soft Rock",
                        "Arena Rock",
                        "Psychedelic",
                        "Rock & Roll",
                    ],
                    releaseDate: "1968-11-22",
                    isMasteredForItunes: true,
                    upc: "00602567725466",
                    artwork: {
                        width: 3000,
                        url: "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/fa/5b/89/fa5b898d-bad6-e053-4195-260e5c74f2bb/00602567725466.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "3c3b3b",
                        textColor2: "0c0a0a",
                        textColor4: "3c3b3b",
                        textColor1: "0c0a0a",
                        bgColor: "ffffff",
                        hasP3: false,
                    },
                    playParams: {
                        id: "1441133180",
                        kind: "album",
                    },
                    url: "https://music.apple.com/us/album/the-beatles-the-white-album/1441133180",
                    recordLabel: "UMC (Universal Music Catalogue)",
                    trackCount: 31,
                    isCompilation: false,
                    isPrerelease: false,
                    audioTraits: ["lossless", "lossy-stereo"],
                    isSingle: false,
                    name: "The Beatles (The White Album)",
                    artistName: "The Beatles",
                    editorialNotes: {
                        standard:
                            'Beneath the white-on-white cover art, "The White Album" is an eclectic, 30-track album of largely stripped-down material, originally spread across two vinyl records. The album was a stark contrast to <i>Sgt. Pepper</i> in every aspect—from the cover art to the sounds within. The sheer breadth of material as well as the mixture of the loud and the soft is part of what makes "The White Album" so surprising. The heavy sounds of "Helter Skelter" and "Yer Blues" juxtapose with the gentle beauty of "Long, Long, Long" and "Julia." The cacophony of "Revolution 9" is followed by the orchestral lullaby of "Good Night." The album\'s extended length gave the band room in which they could explore all of their musical influences and multiple forms of popular music, while creating revolutionary sounds in the studio.',
                        short: "An eclectic 30-track album with a stunning breadth of material and dynamic songs. \n",
                    },
                    isComplete: true,
                },
            },
            1441133181: {
                id: "1441133181",
                type: "albums",
                href: "/v1/catalog/us/albums/1441133181?l=en-US",
                attributes: {
                    copyright:
                        "This Compilation ℗ 2009 Calderstone Productions Limited (a division of Universal Music Group)",
                    genreNames: [
                        "Rock",
                        "Music",
                        "Singer/Songwriter",
                        "Folk-Rock",
                        "British Invasion",
                        "Psychedelic",
                        "Pop",
                        "Soft Rock",
                        "Rock & Roll",
                        "Pop/Rock",
                    ],
                    releaseDate: "1988-03-07",
                    isMasteredForItunes: true,
                    upc: "00602567725268",
                    artwork: {
                        width: 3000,
                        url: "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/01/69/02/01690216-48fc-1c54-b1de-48170d16b1c3/00602567725268.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "cbcbcb",
                        textColor2: "dedede",
                        textColor4: "b1b1b1",
                        textColor1: "ffffff",
                        bgColor: "000000",
                        hasP3: false,
                    },
                    playParams: {
                        id: "1441133181",
                        kind: "album",
                    },
                    url: "https://music.apple.com/us/album/past-masters-vols-1-2/1441133181",
                    recordLabel: "UMC (Universal Music Catalogue)",
                    isCompilation: false,
                    trackCount: 33,
                    isPrerelease: false,
                    audioTraits: ["lossless", "lossy-stereo"],
                    isSingle: false,
                    name: "Past Masters, Vols. 1 & 2",
                    artistName: "The Beatles",
                    editorialNotes: {
                        standard:
                            "Because The Beatles were so central in developing our concept of the album as a unified statement of artistic purpose, it’s easy to forget that they started their career at a time when most artists measured success in stand-alone singles. “I Want to Hold Your Hand”? Not on a Beatles album—at least not in the UK. (Capitol repurposed some of the band’s early material in the US, but hodgepodge.) Ditto “She Loves You,” and “Day Tripper,” and “Paperback Writer.” Even after <i>Revolver</i> and <i>Sgt. Pepper’s</i> helped redefine the boundaries of what albums could do, the band still saved some of their best material for singles: “Get Back,” “The Ballad of John and Yoko,” the eternally cathartic “Hey Jude.” (As to the latter in particular, producer George Martin worried that radio wouldn’t play a seven-minute-long single, to which Lennon—never exactly meek, especially by 1968—said, “They will if it’s us.”)<br />\nAs a collection, <i>Past Masters</i> serves the separate function of summarizing the short career of a singularly dynamic band. Like vast country seen from the window of a plane, things move quickly and at geologic scale: the early club years, Beatlemania, the advent of psychedelia, the imperial phase of the late '60s, the rootsy autumn—90 minutes, eight years, a microcosm of rock music in its radical adolescence. And to think they started stamping it out as nothing more than product.",
                        short: "From “She Loves You” to “Hey Jude,” an impeccable collection of singles.",
                    },
                    isComplete: true,
                },
            },
            1441133389: {
                id: "1441133389",
                type: "albums",
                href: "/v1/catalog/us/albums/1441133389?l=en-US",
                attributes: {
                    copyright:
                        "℗ 2011 Calderstone Productions Limited (a division of Universal Music Group) / Apple Corps Ltd.",
                    genreNames: [
                        "Rock",
                        "Music",
                        "Soundtrack",
                        "Pop",
                        "Soft Rock",
                        "British Invasion",
                        "Psychedelic",
                        "Pop/Rock",
                    ],
                    releaseDate: "2006-11-20",
                    isMasteredForItunes: true,
                    upc: "00602567698579",
                    artwork: {
                        width: 3000,
                        url: "https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/bb/6c/72/bb6c7262-487c-24d6-338f-98f892d75f3c/00602567698579.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "4e2700",
                        textColor2: "360204",
                        textColor4: "5d2903",
                        textColor1: "240000",
                        bgColor: "fac400",
                        hasP3: false,
                    },
                    playParams: {
                        id: "1441133389",
                        kind: "album",
                    },
                    url: "https://music.apple.com/us/album/love/1441133389",
                    recordLabel: "UMC (Universal Music Catalogue)",
                    trackCount: 28,
                    isCompilation: false,
                    isPrerelease: false,
                    audioTraits: [
                        "hi-res-lossless",
                        "lossless",
                        "lossy-stereo",
                    ],
                    isSingle: false,
                    name: "Love",
                    artistName: "The Beatles",
                    editorialNotes: {
                        standard:
                            'Part soundtrack to the Cirque du Soleil show of the same name and part remix album, The Beatles\' <i>LOVE</i> is a detailed and exhilarating look at the band\'s entire catalog. Producers George Martin and his son Giles worked with the entire archive of multitrack recordings to create a soundscape of new, yet recognizable, music for the Las Vegas show. For example: the guitars from "A Hard Day\'s Night" are blended into "Get Back" while "Something" transitions, using elements of "Blue Jay Way" and "Nowhere Man," into "Being for the Benefit of Mr. Kite." The GRAMMY® Award-winning album is a sonic tapestry that allows you to discover new sounds within one of the most celebrated catalogs of music.',
                        short: "A detailed and exhilarating look at the band’s entire catalog.",
                    },
                    isComplete: true,
                },
            },
            1441163490: {
                id: "1441163490",
                type: "albums",
                href: "/v1/catalog/us/albums/1441163490?l=en-US",
                attributes: {
                    copyright:
                        "This Compilation ℗ 2009 Calderstone Productions Limited (a division of Universal Music Group)",
                    genreNames: ["Rock", "Music"],
                    releaseDate: "1967-11-27",
                    isMasteredForItunes: true,
                    upc: "00602567705437",
                    artwork: {
                        width: 3000,
                        url: "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/43/0e/37/430e3790-75d5-c96a-1380-f9d9803aa700/18UMGIM31245.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "2e2906",
                        textColor2: "530801",
                        textColor4: "712f03",
                        textColor1: "000104",
                        bgColor: "e9cb0b",
                        hasP3: false,
                    },
                    playParams: {
                        id: "1441163490",
                        kind: "album",
                    },
                    url: "https://music.apple.com/us/album/magical-mystery-tour/1441163490",
                    recordLabel: "UMC (Universal Music Catalogue)",
                    trackCount: 12,
                    isCompilation: false,
                    isPrerelease: false,
                    audioTraits: ["lossless", "lossy-stereo"],
                    isSingle: false,
                    name: "Magical Mystery Tour",
                    artistName: "The Beatles",
                    editorialNotes: {
                        standard:
                            "Though wedged between the comparatively giant <i>Sgt. Pepper’s</i> and 1968’s White Album, <i>Magical Mystery Tour</i> nevertheless played a part in The Beatles' story, and put a cap on a year in which the band made yet more music nobody was totally prepared for them to make. The album was released as a companion to a meandering, band-directed movie, and its first half is probably one of the lowest-stakes sides in the band’s catalog—a relief, in a way, from how high-stakes their music had become. Still, this was The Beatles in 1967—momentum was strong. What had started out as a string of acid playground rhymes turned into Lennon’s angriest song this side of 1970 (“I Am the Walrus”), while McCartney’s simple sentimentality had taken on a quality that felt stoic, almost abstract (“The Fool on the Hill”). There was a rare instrumental (“Flying”), a foggy Harrison drone (“Blue Jay Way”), and an invocation of the past by McCartney that blurred lines between sweet and eerie (“Your Mother Should Know”).<br />\nWhile the band had helped rechristen the album format as an artistic statement unto itself, they were still releasing singles—as in tracks that weren’t associated with any album. Designed primarily as a consumer service, the second half of <i>Magical Mystery Tour</i> collected what they’d offered in 1967. The yin-yang of McCartney’s “Penny Lane” and Lennon’s “Strawberry Fields Forever” (originally released on the same 7-inch record) arguably says more about what ground the band covered in seven minutes than any other two songs in their catalog—the former baroque, charming, and upbeat; the latter dense and melancholy—variations on a theme of seemingly simple pasts refracted, dreamlike, through the present. And if “I Am the Walrus” was Lennon’s dark foray into contradiction and surreality, McCartney’s “Hello, Goodbye” was its bright counterpart. “Baby, You’re a Rich Man” probably doesn’t get the credit it deserves. “All You Need Is Love,” debuted to an estimated 400 million people in the world’s first live international satellite TV production (<i>Our World</i>), did receive wide acclaim, and while cynicism and embarrassment about 1967’s Summer of Love would set in as soon as a few years later, it probably deserves more.<br />\nAs for the movie that gave the album its name, press coverage of it was so uniformly hostile (not to mention viewer feedback to the BBC switchboard so sustained) that McCartney went on the BBC the day after it first aired to defuse the tension. Asked why he thought people didn’t like it, McCartney said he wasn’t sure—he liked it fine.",
                        short: "A victory lap for a big 1967.",
                    },
                    isComplete: true,
                },
            },
            1441164359: {
                id: "1441164359",
                type: "albums",
                href: "/v1/catalog/us/albums/1441164359?l=en-US",
                attributes: {
                    copyright:
                        "℗ 2009 Calderstone Productions Limited (a division of Universal Music Group)",
                    genreNames: [
                        "Rock",
                        "Music",
                        "Pop",
                        "Pop/Rock",
                        "British Invasion",
                        "Singer/Songwriter",
                        "Folk-Rock",
                        "Soft Rock",
                        "Rock & Roll",
                        "Psychedelic",
                    ],
                    releaseDate: "1965-12-03",
                    isMasteredForItunes: true,
                    upc: "00602567725404",
                    artwork: {
                        width: 3000,
                        url: "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/af/20/aa/af20aa89-4002-11fb-25d8-ff544af67eb4/00602567725404.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "ba5d1f",
                        textColor2: "eb6311",
                        textColor4: "bd5310",
                        textColor1: "e76f24",
                        bgColor: "05150a",
                        hasP3: false,
                    },
                    playParams: {
                        id: "1441164359",
                        kind: "album",
                    },
                    url: "https://music.apple.com/us/album/rubber-soul/1441164359",
                    recordLabel: "UMC (Universal Music Catalogue)",
                    trackCount: 15,
                    isCompilation: false,
                    isPrerelease: false,
                    audioTraits: ["lossless", "lossy-stereo"],
                    isSingle: false,
                    name: "Rubber Soul",
                    artistName: "The Beatles",
                    editorialNotes: {
                        standard:
                            "It wasn’t just that <i>Rubber Soul</i> was sonically groundbreaking (it was), or that Lennon and McCartney’s songwriting had reached new heights of maturity and ambiguity (okay), but that it was the first Beatles album where each song seemed to exist unto itself and yet worked in alchemical harmony with everything around it: the emergence of the pop album as creative kaleidoscope.<br />\nMcCartney had told the <i>New Musical Express</i> that the band was banking on comedy being the next big thing after protest music—a reflection, possibly, of the existential irreverence one feels on acid, their growing insularity from (and reluctance toward) the culture at large, a philosophical commitment to enjoying the ride, or some giddy mix of all three.<br />\nWhatever the case, <i>Rubber Soul</i> is a deeply funny album: the gender play of “Drive My Car” (and the <i>beep-beep</i> backing vocals), the cabaret of “Michelle” (because nothing warms up the object of one’s desire like French), the way Lennon sucks deeply through his teeth before oozing the chorus to “Girl.” Even the album’s most earnest songs (“Nowhere Man,” “In My Life”) were touched by a nursery-rhyme gentleness that made their themes (psychic alienation, the astonishing continuity of past and present) go down easily. As for “Norwegian Wood,” what can you really do with the suggestion that the narrator burns the girl’s house down but shrug in uncertainty? This is how the album unfolds: colorful, dreamy, and delirious on the surface, with shadows swimming underneath.<br />\nThe overall feeling is one of liberation: In getting a little chemical-assisted distance from their egos, the band was able to explore style in ways that felt fluid and radical, changing costumes from song to song instead of locking themselves continuously into being The Beatles—a channel-changing approach that only became more pronounced as their career wound on (especially on the White Album and <i>Abbey Road</i>), not to mention set a new precedent for the diversity of modes and expressions pop artists were suddenly allowed to explore. As for the title, McCartney had remembered something an old bluesman said about Mick Jagger—that he was “plastic soul.” In the original iteration, it was a diss; in The Beatles’ version, it was a statement of liberation: In embracing artifice, you free yourself from the confines of the real.",
                        short: "A big, colorful breakthrough.",
                    },
                    isComplete: true,
                },
            },
            1441164362: {
                id: "1441164362",
                type: "albums",
                href: "/v1/catalog/us/albums/1441164362?l=en-US",
                attributes: {
                    copyright:
                        "℗ 2009 Calderstone Productions Limited (a division of Universal Music Group)",
                    genreNames: [
                        "Rock",
                        "Music",
                        "Rock & Roll",
                        "Pop",
                        "Pop/Rock",
                        "Soft Rock",
                        "British Invasion",
                    ],
                    releaseDate: "1963-11-22",
                    upc: "00602567725619",
                    isMasteredForItunes: true,
                    artwork: {
                        width: 3000,
                        url: "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/03/02/d2/0302d204-77c1-0c87-e03a-698bd31cf038/00602567725619.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "cbcbcb",
                        textColor2: "dddddd",
                        textColor4: "b1b1b1",
                        textColor1: "ffffff",
                        bgColor: "000000",
                        hasP3: false,
                    },
                    url: "https://music.apple.com/us/album/with-the-beatles/1441164362",
                    playParams: {
                        id: "1441164362",
                        kind: "album",
                    },
                    recordLabel: "UMC (Universal Music Catalogue)",
                    trackCount: 15,
                    isCompilation: false,
                    isPrerelease: false,
                    audioTraits: ["lossless", "lossy-stereo"],
                    isSingle: false,
                    name: "With The Beatles",
                    artistName: "The Beatles",
                    editorialNotes: {
                        standard:
                            "The Beatles didn’t get a lot of breathing room in 1963: In February, they had to be smuggled out of a show in Carlisle in a post office van by a police sergeant disguised as a mail carrier; by November, a couple of weeks before the release of their second album, <i>With the Beatles</i>, a riot broke out after fans <i>pushed a parked car</i> into a line of police officers trying to enforce a cordon outside a show in Dublin. Though the precise coinage is still debated, the word “Beatlemania” entered the public lexicon in October; at a couple of live shows, the band reportedly stopped being able to hear their instruments over the sound of the screaming.<br />\nWhile the bulk of <i>Please Please Me</i> had been recorded in a single 13-hour session, <i>With the Beatles</i> was recorded in seven sessions over three months—a schedule that seems comparatively luxurious until you realize that every session took place on days between tour dates or other travel-oriented obligations, and in at least one case, straddled a three-and-a-half-hour stretch in the middle of the day during which the band drove to a theater several miles from the studio to record both an interview <i>and</i> a session for the BBC. In London traffic. On a Tuesday. Oh, and they wrote most of the songs, too, and in some mysterious hour during which the accomplished accomplish things, they learned to play them as well.<br />\nAnd so here they were again: Moody on the album cover (a black-and-white Robert Freeman photo inspired by Freeman’s images of John Coltrane), bright and unruffled in the music. Like <i>Please Please Me</i>, about half of <i>With the Beatles</i> was made up of covers of American soul and R&B (The Marvelettes’ “Please Mr. Postman,” Smokey Robinson’s “You Really Got a Hold on Me”), while half were Lennon and/or McCartney originals. If Lennon was emerging as the band’s ironist (Barrett Strong’s “Money [That’s What I Want]”), McCartney was becoming their moony romantic (<i>The Music Man</i> highlight “Till There Was You”)—a yin-yang balance that lasted the duration of their shared career. (At the <i>Royal Variety Performance</i> in early November, Lennon famously encouraged the people in the cheap seats to clap along and the rest of the audience—which included the Queen—“rattle your jewelry.”)<br />\nWhile still basically a youth band, they’d started to get dues from the establishment, too: A couple of days before Christmas, a critic for <i>The Times</i> said they were the finest English composers of the year, noting that they seemed to think simultaneously of harmony <i>and</i> melody, while also singling out the naturalness of their Aeolian cadences and intriguing pandiatonic clusters, none of which mattered to the hoarse-voiced teenagers squatted for days outside ticket booths, but which signaled the possibility that the band was on the brink of universal appeal: pop music handled with the sanctity of art.",
                        short: "A flash in the pan catches fire.",
                    },
                    isComplete: true,
                },
            },
            1441164416: {
                id: "1441164416",
                type: "albums",
                href: "/v1/catalog/us/albums/1441164416?l=en-US",
                attributes: {
                    copyright:
                        "This Compilation ℗ 2009 Calderstone Productions Limited (a division of Universal Music Group)",
                    genreNames: [
                        "Rock",
                        "Music",
                        "Rock & Roll",
                        "Singer/Songwriter",
                        "Folk-Rock",
                        "Pop",
                        "Soft Rock",
                        "British Invasion",
                        "Soundtrack",
                        "Pop/Rock",
                        "Soundtrack",
                    ],
                    releaseDate: "1964-07-10",
                    isMasteredForItunes: true,
                    upc: "00602567713296",
                    artwork: {
                        width: 3000,
                        url: "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/db/a2/7a/dba27a46-3685-508d-d32e-a0e73cc82251/00602567713296.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "353537",
                        textColor2: "001d3b",
                        textColor4: "334a62",
                        textColor1: "030305",
                        bgColor: "ffffff",
                        hasP3: false,
                    },
                    url: "https://music.apple.com/us/album/a-hard-days-night/1441164416",
                    playParams: {
                        id: "1441164416",
                        kind: "album",
                    },
                    recordLabel: "UMC (Universal Music Catalogue)",
                    isCompilation: false,
                    trackCount: 14,
                    isPrerelease: false,
                    audioTraits: ["lossless", "lossy-stereo"],
                    isSingle: false,
                    name: "A Hard Day's Night",
                    artistName: "The Beatles",
                    editorialNotes: {
                        standard:
                            "Driving through Colorado during a road trip in early 1964, Bob Dylan heard a rundown of the country’s Top 10 singles, more than half of which were by The Beatles. By then, the band had saturated America with the same bizarre speed they’d saturated England, first broadcast on American radio about a week before Christmas 1963 by a Washington, D.C.-area DJ whose friend—a flight attendant for BOAC—had brought a copy of “I Want to Hold Your Hand” over in their luggage, essentially unplugging the last finger holding back a transatlantic flood.<br />\nWhether or not Dylan liked the band’s music was unclear. (We’re talking about Bob Dylan here.) What he did acknowledge was that their sound—the energy, the harmonic language, the combination of universally appealing but unprecedented—was somehow inevitable; that they pointed the direction of where music <i>had</i> to go.<br />\nAt the time, folk—Dylan’s province—was considered part of a vanguard; in jazz, composers like John Coltrane had already signaled a move toward abstraction; in visual art, pop had happily unseated the macho hugeness of abstract expressionism; independent filmmaking was developing a momentum. In other words, where other cultural avenues had taken new directions, pop music had mostly stayed the course.<br />\nReleased in summer 1964 (only a year and change after <i>Please Please Me</i>), <i>A Hard Day’s Night</i> was arguably the first glimpse of our modern idea of The Beatles: safe but a little strange; warm but with shades of bleakness; a band that experimented tirelessly without ever leaving the mainstream. Famously, it was the first time that Lennon and McCartney had written all of the album’s songs, a gesture that set the precedent for the then-new idea that pop (and, by extension, the musicians who made it) wasn’t just a vehicle for a good show, but art that revealed some otherwise inexpressible part of the artist’s soul—something personal.<br />\nThe music was more evolved too. What had, on their first couple of albums, been borrowed from R&B and soul covers became baked into their own compositions: the workaday relief of the title track, the blues morality of “Can’t Buy Me Love” (covered, almost immediately, by Ella Fitzgerald). Lennon’s “I’ll Be Back” was the moodiest song they’d ever recorded, McCartney’s “And I Love Her” the most nakedly open-hearted, capturing a shadow-and-light quality that was warm but stark—contrasts new not just for their songwriting, but for ’60s pop in general.<br />\nThat the album had originally been conceived of as a soundtrack for a United Artists movie designed to capitalize on The Beatles’ fame in England (Capitol had been famously reticent to release their albums in the United States) is an illustration of just how swiftly the machine’s gears were turning; that the band managed to make not only the album but also the movie as charming and sneakily creative as they did is—well, you see where they got their good reputation.",
                        short: "The boys come into their own.",
                    },
                    isComplete: true,
                },
            },
            1441164426: {
                id: "1441164426",
                type: "albums",
                href: "/v1/catalog/us/albums/1441164426?l=en-US",
                attributes: {
                    copyright:
                        "This Compilation ℗ 2009 Calderstone Productions Limited (a division of Universal Music Group)",
                    genreNames: [
                        "Rock",
                        "Music",
                        "Arena Rock",
                        "Rock & Roll",
                        "Prog-Rock/Art Rock",
                        "Pop",
                        "Pop/Rock",
                        "Adult Contemporary",
                        "Hard Rock",
                        "Psychedelic",
                        "Soft Rock",
                    ],
                    releaseDate: "1969-09-26",
                    upc: "00602567713449",
                    isMasteredForItunes: true,
                    artwork: {
                        width: 3000,
                        url: "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/df/db/61/dfdb615d-47f8-06e9-9533-b96daccc029f/18UMGIM31076.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "c3c7b6",
                        textColor2: "acdcf9",
                        textColor4: "8eb6cf",
                        textColor1: "eff1d9",
                        bgColor: "161d29",
                        hasP3: false,
                    },
                    playParams: {
                        id: "1441164426",
                        kind: "album",
                    },
                    url: "https://music.apple.com/us/album/abbey-road-remastered/1441164426",
                    recordLabel: "UMC (Universal Music Catalogue)",
                    trackCount: 18,
                    isCompilation: false,
                    isPrerelease: false,
                    audioTraits: ["lossless", "lossy-stereo"],
                    isSingle: false,
                    name: "Abbey Road (Remastered)",
                    artistName: "The Beatles",
                    editorialNotes: {
                        standard:
                            '<i>Abbey Road</i> uses a "less is more" approach to production throughout, giving "Come Together" a controlled intensity while the raw sound of Paul\'s voice on "Oh! Darling" is one of the album\'s highlights. The sound of a whole band working together flawlessly is heard most notably in the 8-title dramatic medley that made up the second side of the vinyl; finishing fittingly with “The End.” ',
                        short: "The sound of the whole band working together flawlessly with a less-is-more approach.\n",
                    },
                    isComplete: true,
                },
            },
            1441164495: {
                id: "1441164495",
                type: "albums",
                href: "/v1/catalog/us/albums/1441164495?l=en-US",
                attributes: {
                    copyright:
                        "℗ 2009 Calderstone Productions Limited (a division of Universal Music Group) / Apple Corps Ltd.",
                    genreNames: [
                        "Rock",
                        "Music",
                        "Rock & Roll",
                        "Pop",
                        "Soft Rock",
                        "Pop/Rock",
                        "Singer/Songwriter",
                        "Arena Rock",
                    ],
                    releaseDate: "1970-05-08",
                    isMasteredForItunes: true,
                    upc: "00602567705475",
                    artwork: {
                        width: 3000,
                        url: "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/ae/98/4c/ae984c7a-cd06-a7cd-e8bf-32cb15ba698d/00602567705475.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "c4c3c3",
                        textColor2: "f6b88c",
                        textColor4: "c49370",
                        textColor1: "f6f3f4",
                        bgColor: "000000",
                        hasP3: false,
                    },
                    url: "https://music.apple.com/us/album/let-it-be/1441164495",
                    playParams: {
                        id: "1441164495",
                        kind: "album",
                    },
                    recordLabel: "UMC (Universal Music Catalogue)",
                    trackCount: 13,
                    isCompilation: false,
                    isPrerelease: false,
                    audioTraits: ["lossless", "lossy-stereo"],
                    isSingle: false,
                    name: "Let It Be",
                    artistName: "The Beatles",
                    editorialNotes: {
                        standard:
                            "The dissolution of The Beatles was a famously unpleasant situation: By 1968, Lennon and McCartney were sometimes working simultaneously in separate studios; only about half of the White Album’s songs featured the full band. Conceived by McCartney as an effort to reclaim the band’s marital groove, <i>Let It Be</i> presented The Beatles not as an elaborate studio art project but as four guys making music together in a room.<br />\nFor as divisive as Phil Spector’s 11th-hour contributions were (George Martin joked that he should be given a credit for production, while Spector should get one for overproduction), they were also overstated: Only a handful of tracks here—most notably Lennon’s “Across the Universe” and McCartney’s “The Long and Winding Road”—were all that heavily orchestrated. While some were chopped up and reassembled to get a better shape, the rest of the album (“Get Back,” George Harrison’s breezy “For You Blue,” the surrealistic blues of Lennon’s “Dig a Pony,” recorded live on the rooftop of the band’s Apple Corps offices) hewed more or less to what McCartney had envisioned: The Beatles rediscovering the poise and spontaneity of a great live band. (“Let It Be” was a relatively big production even before Spector came on board.)<br />\nStill, it’s a bittersweet, sometimes uncomfortable listen, and only further muddled by the eternal debate of whether or not it was actually the band’s last album, having been more or less finished before <i>Abbey Road</i> was started but not released until the band had broken up about a year later. (“And now we’d like to do ‘Hark, the Angels Come!’” Lennon squeaks in falsetto before “Let It Be”—a jab at what he felt was Paul’s sodden pseudo-religiosity.) Still, listen and you can still hear the heart, humor, and camaraderie that made them so unusual to begin with: McCartney’s “Two of Us,” the throwback “One After 909,” the eternal “Get Back.”<br />\nIn September 1969, Lennon quit. <i>Abbey Road</i> came out about a week later. McCartney effectively quit the following April, and put out his first solo record, <i>McCartney</i>, about a week later. In a self-interview that doubled as album promotion and carefully worded statement of personal independence, McCartney said that his only immediate plans were to grow up.",
                        short: "Four guys in a room come full circle.",
                    },
                    isComplete: true,
                },
            },
            1441164524: {
                id: "1441164524",
                type: "albums",
                href: "/v1/catalog/us/albums/1441164524?l=en-US",
                attributes: {
                    copyright:
                        "℗ 2009 Calderstone Productions Limited (a division of Universal Music Group)",
                    genreNames: [
                        "Rock",
                        "Music",
                        "Pop",
                        "Pop/Rock",
                        "Rock & Roll",
                        "Soft Rock",
                        "British Invasion",
                    ],
                    releaseDate: "1965-08-06",
                    isMasteredForItunes: true,
                    upc: "00602567725220",
                    artwork: {
                        width: 3000,
                        url: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/1a/19/db/1a19db26-17ad-b986-11a9-f72ac7a6194b/18UMGIM31214.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "3c3c3c",
                        textColor2: "012939",
                        textColor4: "345461",
                        textColor1: "0b0b0b",
                        bgColor: "ffffff",
                        hasP3: false,
                    },
                    url: "https://music.apple.com/us/album/help/1441164524",
                    playParams: {
                        id: "1441164524",
                        kind: "album",
                    },
                    recordLabel: "UMC (Universal Music Catalogue)",
                    isCompilation: false,
                    trackCount: 15,
                    isPrerelease: false,
                    audioTraits: ["lossless", "lossy-stereo"],
                    isSingle: false,
                    name: "Help!",
                    artistName: "The Beatles",
                    editorialNotes: {
                        standard:
                            "If <i>A Hard Day’s Night</i> and <i>Beatles For Sale</i> sounded like a band chafing at the confines of their own success, <i>Help!</i> was more like a meditation: four people seeking solace from inside a storm they’d never seen gather. Lennon, in particular, was miserable: drinking a lot, numbed out, riding the tail of a crumbling marriage for which he had plenty to atone from a 17-room mansion adjacent to a golf course over which he’d never imagined living—a stretch he later called his “Fat Elvis” period.<br />\nWhere <i>Beatles For Sale</i> had captured the vitality of angry young men, the songs on <i>Help!</i>—Lennon’s “Help!” and “You’ve Got to Hide Your Love Away,” McCartney’s “Yesterday” and “I’ve Just Seen a Face”—felt naked to the point of abstraction, the heat of the feelings stripped away to reveal something pining, innocent, planted on the ground but strangely displaced: alienation without angst.<br />\nCannabis, which the band had been smoking with heroic regularity, probably didn’t hurt: You had the sense that they were singing not from themselves, but about themselves, even <i>to</i> themselves, pieces on a great existential chessboard observed from a place of melancholic remove. (McCartney said the drug made him feel like he was thinking for the first time; Ringo, recalling the filming of the movie that accompanied this album, said—in charming Ringo fashion—that the crew got used to the fact that the band didn’t get much done after lunch.) Even Ringo’s “Act Naturally”—a lighthearted, Kinks-y country song—seemed tinted by a new, more ruminative frame of mind: The guy in the song is an actor playing himself.<br />\nAnd while you could still hear the sweaty club band lurking underneath (“Dizzy Miss Lizzy,” “Help!”), most of the album tilted toward classical austerity: “You’ve Got to Hide Your Love Away” was the band’s first fully acoustic arrangement (and featured the eternally un-rock sound of flutes); “Yesterday”—a song that seemed so comforting and eternal that McCartney was reportedly haunted by the feeling that it had somehow, somewhere already been written—had a string quartet (a move suggested to a hesitant McCartney by producer George Martin). Having spent their youth in extroversion, the Beatles were turning inward.<br />\nAbout a week after the album came out, the band played a show to 56,000 screaming people at Shea Stadium, a scenario and scale so unprecedented that Vox had designed special amplifiers for the event. A week or so after that, they took a few much-needed days off at a rented house in Beverly Hills (featuring a moat and a drawbridge), only to be discovered by four teenage female fans. When security guards turned the girls away, they went home, opened the Yellow Pages, and rented a helicopter. <i>Help!</i>—that sounds right.",
                        short: "A meditation on the quarter-life crisis.",
                    },
                    isComplete: true,
                },
            },
            1441164525: {
                id: "1441164525",
                type: "albums",
                href: "/v1/catalog/us/albums/1441164525?l=en-US",
                attributes: {
                    copyright:
                        "℗ 2009 Calderstone Productions Limited (a division of Universal Music Group)",
                    genreNames: [
                        "Rock",
                        "Music",
                        "Pop",
                        "Pop/Rock",
                        "Rock & Roll",
                        "Soft Rock",
                        "Psychedelic",
                        "British Invasion",
                    ],
                    releaseDate: "1969-01-13",
                    isMasteredForItunes: true,
                    upc: "00602567725640",
                    artwork: {
                        width: 3000,
                        url: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/b1/94/f3/b194f3c3-3bcf-62f6-a795-093a3d3c0407/00602567725640.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "333333",
                        textColor2: "06253f",
                        textColor4: "385065",
                        textColor1: "000000",
                        bgColor: "ffffff",
                        hasP3: false,
                    },
                    playParams: {
                        id: "1441164525",
                        kind: "album",
                    },
                    url: "https://music.apple.com/us/album/yellow-submarine/1441164525",
                    recordLabel: "UMC (Universal Music Catalogue)",
                    isCompilation: false,
                    trackCount: 14,
                    isPrerelease: false,
                    audioTraits: ["lossless", "lossy-stereo"],
                    isSingle: false,
                    name: "Yellow Submarine",
                    artistName: "The Beatles",
                    editorialNotes: {
                        standard:
                            'Half of this album contains George Martin\'s lush score for the animated film, and the other half contains the title track (originally released on <i>Revolver</i>), as well as two Eastern-tinged George Harrison numbers ("Only a Northern Song" and "It\'s All Too Much"). Lennon\'s rumbling "Hey Bulldog,” and the infectious "All Together Now” also add colorful touches that fit in with the animated film\'s enduring legacy. ',
                        short: "This album combines George Martin’s lush film score and brilliant original songs.",
                    },
                    isComplete: true,
                },
            },
            1441164604: {
                id: "1441164604",
                type: "albums",
                href: "/v1/catalog/us/albums/1441164604?l=en-US",
                attributes: {
                    copyright:
                        "℗ 2009 Calderstone Productions Limited (a division of Universal Music Group)",
                    genreNames: [
                        "Rock",
                        "Music",
                        "Pop",
                        "Soft Rock",
                        "Pop/Rock",
                        "Psychedelic",
                        "Hard Rock",
                        "Rock & Roll",
                    ],
                    releaseDate: "1967-06-01",
                    isMasteredForItunes: true,
                    upc: "00602567725428",
                    artwork: {
                        width: 3000,
                        url: "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/6f/79/8d/6f798d84-7475-8525-fc91-f7b51b2b5a9b/00602567725428.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "2e3333",
                        textColor2: "1b1a1d",
                        textColor4: "334049",
                        textColor1: "160a02",
                        bgColor: "92d9f9",
                        hasP3: false,
                    },
                    playParams: {
                        id: "1441164604",
                        kind: "album",
                    },
                    url: "https://music.apple.com/us/album/sgt-peppers-lonely-hearts-club-band/1441164604",
                    recordLabel: "UMC (Universal Music Catalogue)",
                    isCompilation: false,
                    trackCount: 14,
                    isPrerelease: false,
                    audioTraits: ["lossless", "lossy-stereo"],
                    isSingle: false,
                    name: "Sgt. Pepper's Lonely Hearts Club Band",
                    artistName: "The Beatles",
                    editorialNotes: {
                        standard:
                            "For better and worse, <i>Sgt. Pepper’s Lonely Hearts Club Band</i> helped set the precedent that rock bands could (and should) do more or less whatever they wanted. Songs got longer, albums grew concepts, and the idea of the LP as a concise product meant to showcase a performer’s talents gave way to the suspicion that commercial concerns ultimately only served The Man. A few months before The Beatles were set to record <i>Sgt. Pepper’s</i>, Bob Dylan had released <i>Blonde on Blonde</i>, an album so expansive it had to literally be pressed onto two records, while The Beach Boys’ <i>Pet Sounds</i> stretched the dimensions and possibilities of the three-minute pop song. McCartney in particular had been fascinated by things like Frank Zappa & The Mothers of Invention’s 1966 debut, <i>Freak Out!</i>, a double album whose hodgepodge of songs, noise, skits, and sound gags mirrored conceptual art’s breaking of the painterly frame. Where The Beatles had once sought to distill and consolidate, now they were looking to expand. McCartney had even come up with an alter ego and pseudo-unifying backstory—a move Lennon later said only worked because the band <i>said</i> it worked. In other words, they didn’t want to just exorcise the group that made “I Want to Hold Your Hand,” they wanted to smother them with a pillow. Vacationing in France just before recording had started, McCartney slicked his hair back with Vaseline and wandered the streets in a fake mustache and clear-lens glasses, an experience he called “quite liberating.”<br />\nFor all its experiments (“A Day in the Life”) and invocations of the counterculture (“Lucy in the Sky With Diamonds”), it’s probably the band’s most conservative album: the beer hall sing-alongs of the title track and “With a Little Help From My Friends,” the old-timey entertainments of “Being for the Benefit of Mister Kite!,” the domestic contentment of “When I’m Sixty-Four.” Like The Kinks circa “Waterloo Sunset” and <i>The Kinks Are the Village Green Preservation Society</i> and The Beach Boys of <i>Smiley Smile</i>, <i>Sgt. Pepper’s</i> is an album that looked toward the past instead of the future, the work of guys in their late twenties starting to wonder if they’d been too eager to break from the old world—or at least might have lost something along the way. (Lennon’s “Strawberry Fields Forever,” recorded around the same time, covered similar themes; that the band was all taking acid—a drug that has a way of flattening geologic time—probably didn’t hurt either.) Even Lennon’s lyric on “A Day in the Life”—“I read the news today, oh boy”—rang with a cosmic quaintness, an image not of young radicals on the loose but of the aging souls of “Eleanor Rigby,” finding infinite richness in a narrow life. A couple of months after the album was released, the band—along with partners, children, and business infrastructure—traveled to Greece with the vague intention of buying an island for everyone to live on, but eventually managed to think better of it.",
                        short: "A new template for rock ’n' roll.",
                    },
                    isComplete: true,
                },
            },
            1441164670: {
                id: "1441164670",
                type: "albums",
                href: "/v1/catalog/us/albums/1441164670?l=en-US",
                attributes: {
                    copyright:
                        "℗ 2009 Calderstone Productions Limited (a division of Universal Music Group)",
                    genreNames: [
                        "Rock",
                        "Music",
                        "Rock & Roll",
                        "British Invasion",
                        "Psychedelic",
                        "Pop",
                        "Soft Rock",
                        "Pop/Rock",
                    ],
                    releaseDate: "1966-08-05",
                    isMasteredForItunes: true,
                    upc: "00602567705499",
                    artwork: {
                        width: 3000,
                        url: "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/58/4a/10/584a1058-de0a-6a6b-d0bd-da09a028b8bc/00602567705499.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "3d3d3d",
                        textColor2: "262424",
                        textColor4: "4d4b4c",
                        textColor1: "121212",
                        bgColor: "eaeaea",
                        hasP3: false,
                    },
                    playParams: {
                        id: "1441164670",
                        kind: "album",
                    },
                    url: "https://music.apple.com/us/album/revolver/1441164670",
                    recordLabel: "UMC (Universal Music Catalogue)",
                    trackCount: 15,
                    isCompilation: false,
                    isPrerelease: false,
                    audioTraits: ["lossless", "lossy-stereo"],
                    isSingle: false,
                    name: "Revolver",
                    artistName: "The Beatles",
                    editorialNotes: {
                        standard:
                            "While it’s romantic to imagine that <i>Revolver</i> was a bolt of genius that arrived without context or precedent, the reality is more interesting. Sometime in 1965, The Beatles' longtime producer George Martin quit his contract with EMI Records. Martin had been working at a flat rate, without royalties—in other words, he would’ve made what he made no matter how well the band did. Martin knew EMI wouldn’t risk jeopardizing the band’s streak, and in leaving, he essentially forced the company to pay him what he was worth. That EMI owned the studios at Abbey Road outright meant The Beatles could record more or less as much as they wanted—an opportunity that, coupled with their increasing reluctance to tour, marked an existential shift in orientation: The Beatles were a studio band now.<br />\nWhat was once a refuge (the band liked recording in part because it gave them a break from the fatigue of touring and public fame) turned into a hub of inspiration. Some results were obvious: the wild tape-loop collages of “Tomorrow Never Knows,” or George Harrison's guitar solo on “I’m Only Sleeping,” made during a six-hour session in which the part was transcribed in reverse by Martin, then recorded with the tape playing backward so as to make the final product sound like it was being sucked out from inside the song. Others—compression, Leslie speakers that gave vocals a liquid, sloshing quality, and automatic double-tracking capacity that allowed the band to split signals across the stereo field and give the recordings new spatial dimension—were subtler, but in all cases pointed to a supremacy of sound for sound’s sake. The pastiche of faces and lack of band attribution on the album’s cover drove home the point: For all the 300-something hours that went into the album’s recording, it’s hard to picture <i>Revolver</i> being made by four guys standing in a room.<br />\nWhile McCartney was getting more interested in characters and scenarios (“For No One,” “Eleanor Rigby”), Lennon—then starting to steep in LSD—was withdrawing into the mysteries of the self (“She Said She Said,” “Tomorrow Never Knows”). Harrison, previously a little peripheral, found not only a voice, but range: Compare the serrated R&B of “Taxman” to the Indian drones of “Love You To”—a contrast as stark as any in the band’s catalog.<br />\nIn a way, it’s understandable why the album was considered minor compared to <i>Sgt. Pepper’s</i> for so long: <i>Pepper’s</i> had a rambling, mythic quality that made it seem like something more than just a set of songs, while <i>Revolver</i> was still essentially following the rubric of <i>Rubber Soul</i>—a compact set of tracks meant to show the best ideas the band had. But if <i>Pepper’s</i> liberated the concept of the big, sprawling rock album, <i>Revolver</i> still speaks to how we understand 21st-century pop: fragmented, super eclectic, each song a fully saturated mood different from the one three minutes in either direction. Where <i>Pepper’s</i> ambled, <i>Revolver</i> honored the entertainer’s timeless responsibility to grab you by the ears.<br />\nLess than a week after the album was released, the band held a press conference at the Astor Hotel in Chicago, where Lennon was inevitably forced to clarify his observation from the previous March that The Beatles had become more popular than Jesus—a comment controversial enough to be publicly denounced by the Vatican, who noted that some subjects should be respected even by beatniks. A few questions later, a member of the press noted—respectfully in both directions—that Jesus probably would have appreciated “Eleanor Rigby.” Lennon, so exhausted and troubled by the ordeal that he’d broken down in tears while preparing to meet the reporters, demurred.",
                        short: "The big leap forward.",
                    },
                    isComplete: true,
                },
            },
            1441164816: {
                id: "1441164816",
                type: "albums",
                href: "/v1/catalog/us/albums/1441164816?l=en-US",
                attributes: {
                    copyright:
                        "℗ 2009 Calderstone Productions Limited (a division of Universal Music Group)",
                    genreNames: [
                        "Rock",
                        "Music",
                        "Pop",
                        "Pop/Rock",
                        "Rock & Roll",
                        "British Invasion",
                        "Soft Rock",
                    ],
                    releaseDate: "1963-03-22",
                    isMasteredForItunes: true,
                    upc: "00602567725275",
                    artwork: {
                        width: 3000,
                        url: "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/9c/ff/b5/9cffb5a6-a37f-c84a-7240-0333a071bc92/00602567725275.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "52514c",
                        textColor2: "2b261e",
                        textColor4: "55514b",
                        textColor1: "272620",
                        bgColor: "ffffff",
                        hasP3: false,
                    },
                    playParams: {
                        id: "1441164816",
                        kind: "album",
                    },
                    url: "https://music.apple.com/us/album/please-please-me/1441164816",
                    recordLabel: "UMC (Universal Music Catalogue)",
                    trackCount: 15,
                    isCompilation: false,
                    isPrerelease: false,
                    audioTraits: ["lossless", "lossy-stereo"],
                    isSingle: false,
                    name: "Please Please Me",
                    artistName: "The Beatles",
                    editorialNotes: {
                        standard:
                            "You have to hand it to The Beatles: They didn’t really know what they were doing. Their first single, “Love Me Do,” had fared pretty well, but was considered a little rough next to the soppy, Broadway-influenced stuff that constituted English pop at the time. Their second, “Please Please Me,” seemed like more of a sure bet: Simpler, sweeter, something to get the kids’ blood going. (After asking John Lennon to overdub harmonica on top of George Harrison’s guitar line, producer George Martin congratulated the band from the control room on their first Number One.)<br />\nA few weeks later, as the national mind was cheerfully unraveling, the band went into the studio for a 10 am session at Martin's urging, and, about 13 hours and countless cigarettes and Zubes cough drops later (Lennon had a cold), finished their first album—essentially a studio snapshot of the material they’d been playing at The Cavern Club in Liverpool, right down to the set-opening count-off.<br />\nThat much of it was Black American R&B and soul—Arthur Alexander’s “Anna (Go To Him),” Gerry Goffin and Carole King’s “Chains” (popularized by The Cookies), The Isley Brothers’ “Twist and Shout” (the day’s last take, hence Lennon’s shredded larynx)—was novel, if not straight-up aberrant, especially when framed in such spartan sonic terms. (Bless The Everly Brothers and Bobby Darin; <i>Please Please Me</i> was neither.) That Lennon and McCartney’s originals showed such innate versatility—polite then raw, buttoned-up then scandalously loose, a synthesis of American rock, pop, and soul played with teenage guile and veteran poise—was cause for the culture to take a deep breath. (“Between them The Beatles adopt a do-it-yourself approach from the very beginning,” the album’s sleeve notes chirped. “They write their own lyrics, design and eventually build their own instrumental backdrops and work out their own vocal arrangements.”)<br />\nThe morning after the session, the band resumed their position as fourth slot on an 11-act bill supporting a 16-year-old pop singer named Helen Shapiro. (Lennon’s voice hadn’t healed; George and Paul did most of the singing.) <i>Please Please Me</i>—yes, The Beatles’ first album—was rush-released that March and stayed at the top of the charts for about six months. It was replaced by their second.",
                        short: "Four young haircuts flip wigs.",
                    },
                    isComplete: true,
                },
            },
            1441165005: {
                id: "1441165005",
                type: "albums",
                href: "/v1/catalog/us/albums/1441165005?l=en-US",
                attributes: {
                    copyright:
                        "℗ 2009 Calderstone Productions Limited (a division of Universal Music Group)",
                    genreNames: [
                        "Rock",
                        "Music",
                        "Singer/Songwriter",
                        "Folk-Rock",
                        "Psychedelic",
                        "Rock & Roll",
                        "Pop",
                        "Pop/Rock",
                        "Soft Rock",
                        "British Invasion",
                    ],
                    releaseDate: "1964-12-04",
                    isMasteredForItunes: true,
                    upc: "00602567725190",
                    artwork: {
                        width: 3000,
                        url: "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/79/2c/10/792c1019-387f-e819-ac8f-bc989f20a970/00602567725190.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "35312b",
                        textColor2: "14221b",
                        textColor4: "434b40",
                        textColor1: "030200",
                        bgColor: "fdedd4",
                        hasP3: false,
                    },
                    playParams: {
                        id: "1441165005",
                        kind: "album",
                    },
                    url: "https://music.apple.com/us/album/beatles-for-sale/1441165005",
                    recordLabel: "UMC (Universal Music Catalogue)",
                    isCompilation: false,
                    trackCount: 15,
                    isPrerelease: false,
                    audioTraits: ["lossless", "lossy-stereo"],
                    isSingle: false,
                    name: "Beatles For Sale",
                    artistName: "The Beatles",
                    editorialNotes: {
                        standard:
                            "By the end of 1964, The Beatles were exhausted. In June, they took their first world tour, traveling from Denmark to the Netherlands, then to Hong Kong, Australia, and New Zealand, often playing two shows a day to make good on the trip. Between mid-August and late September, they played 30 shows in 23 US cities, getting an introduction to pot from Bob Dylan in New York and, a couple of weeks later, drunkenly confessing their mutual love for each other while waiting out a hurricane in Key West—a night later recalled by Paul McCartney on 1982’s John Lennon remembrance “Here Today.” Their fame was inarguable, their pace unsupportable.<br />\nSo while attributing any real cynicism to the title <i>Beatles for Sale</i> is probably a stretch, it’s not out of the ballpark—they were, on some level, a commodity, and finally feeling the squeeze of being trafficked like one. Here’s the first time you get to hear The Beatles really yell, not once (the snarling middle section of Lennon’s “No Reply”) but twice (the background vocals on “What You’re Doing”). Lennon’s songs in particular—“I’m a Loser,” “I Don’t Want to Spoil the Party” (“I’ve had a drink or two and I don’t care”), the bleakly jealous “No Reply”—showed a writer giving himself over to his least marketable moods.<br />\nUnable to balance the demands of writing with touring and general fame, they fell back on covers: Chuck Berry’s “Rock and Roll Music,” Buddy Holly’s “Words of Love,” “Mr. Moonlight.” It was rock and R&B that stood in sharper contrast to their originals than on previous albums, but which—along with the LP’s country inflections—helped extend the band’s dialogue with distinctly American music. And they managed to brighten up enough to work in “Eight Days a Week.”",
                        short: "A world-weary cap on a long year.",
                    },
                    isComplete: true,
                },
            },
            1474815798: {
                id: "1474815798",
                type: "albums",
                href: "/v1/catalog/us/albums/1474815798?l=en-US",
                attributes: {
                    copyright:
                        "℗ 2019 Calderstone Productions Limited (a Division of Universal Music Group) / Apple Corps Limited",
                    genreNames: [
                        "Rock",
                        "Music",
                        "Rock & Roll",
                        "Pop",
                        "Pop/Rock",
                        "Prog-Rock/Art Rock",
                        "Adult Contemporary",
                        "Hard Rock",
                        "Soft Rock",
                        "Psychedelic",
                        "Arena Rock",
                    ],
                    releaseDate: "1969-09-26",
                    upc: "00602508145636",
                    isMasteredForItunes: true,
                    artwork: {
                        width: 3000,
                        url: "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/f6/db/94/f6db94bd-35f8-2806-6459-dee4fbd85c68/19UMGIM68354.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "91b6cc",
                        textColor2: "42afef",
                        textColor4: "398fc3",
                        textColor1: "b0dffa",
                        bgColor: "140f13",
                        hasP3: false,
                    },
                    playParams: {
                        id: "1474815798",
                        kind: "album",
                    },
                    url: "https://music.apple.com/us/album/abbey-road-2019-mix/1474815798",
                    recordLabel: "UMC (Universal Music Catalogue)",
                    trackCount: 17,
                    isCompilation: false,
                    isPrerelease: false,
                    audioTraits: [
                        "atmos",
                        "hi-res-lossless",
                        "lossless",
                        "lossy-stereo",
                        "spatial",
                    ],
                    isSingle: false,
                    name: "Abbey Road (2019 Mix)",
                    artistName: "The Beatles",
                    isComplete: true,
                },
            },
            1474833332: {
                id: "1474833332",
                type: "albums",
                href: "/v1/catalog/us/albums/1474833332?l=en-US",
                attributes: {
                    copyright:
                        "This Compilation ℗ 2019 Calderstone Productions Limited (a Division of Universal Music Group) / Apple Corps Limited",
                    genreNames: [
                        "Rock",
                        "Music",
                        "Pop",
                        "Oldies",
                        "Singer/Songwriter",
                        "Pop/Rock",
                        "Adult Contemporary",
                        "Rock & Roll",
                        "Soft Rock",
                        "Psychedelic",
                    ],
                    releaseDate: "1969-09-26",
                    isMasteredForItunes: true,
                    upc: "00602508146084",
                    artwork: {
                        width: 3000,
                        url: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/29/77/1d/29771d4e-a301-6e48-99de-1300b3f63f15/19UMGIM68356.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "91b6cc",
                        textColor2: "42afef",
                        textColor4: "398fc3",
                        textColor1: "b0dffa",
                        bgColor: "140f13",
                        hasP3: false,
                    },
                    playParams: {
                        id: "1474833332",
                        kind: "album",
                    },
                    url: "https://music.apple.com/us/album/abbey-road-super-deluxe-edition-2019-remix-remaster/1474833332",
                    recordLabel: "UMC (Universal Music Catalogue)",
                    isCompilation: false,
                    trackCount: 40,
                    isPrerelease: false,
                    audioTraits: [
                        "hi-res-lossless",
                        "lossless",
                        "lossy-stereo",
                    ],
                    isSingle: false,
                    name: "Abbey Road (Super Deluxe Edition) [2019 Remix & Remaster]",
                    artistName: "The Beatles",
                    editorialNotes: {
                        standard:
                            "“<i>Abbey Road</i> as a whole, as an album, is a very good gateway to the rest of the Beatles universe,” producer Giles Martin tells Apple Music. “Because it's the most contemporary-sounding album. It doesn't sound like it was recorded in the '60s.” What the album does sound like—and how it got to sound that way—is of particular interest to Martin, whose late father George was the Fab Four's original producer. And as he did with the 50th anniversary reissues of <i>Sgt. Pepper's Lonely Hearts Club Band</i> in 2017 and the White Album in 2018, Martin has painstakingly rebuilt The Beatles' 11th and penultimate album piece by piece, and also unearthed a trove of demos and alternate tracks. (A highlight of the latter includes the band bantering about noise complaints from Abbey Road neighbors while recording “I Want You [She's So Heavy]”.)<br />\nThe goal of the project is not just to appeal to Beatles obsessives, but also to recontextualize what the album means for a contemporary audience and to upgrade the sonic fidelity to match what they are used to hearing. “One of the things we strive for in doing these mixes is so that when people listen to, say, Apple Music, you can have a playlist or a radio station with The Beatles next to Ed Sheeran. I'm interested in seeing if you can switch someone from hearing to listening; audiophiles listen to mixes and people listen to songs. I would love younger generations, or new listeners, or people who weren't aware, to go back and listen to The Beatles. They are the bedrock of popular music for so many people.” To help wade through the embarrassment of riches, Martin highlights a handful of tracks that best show The Beatles in this last unified moment before fracturing, and that are most revelatory in newly remixed form.<br />\n<b>Come Together</b>\n“One of the toughest songs to mix. The reason why is because it's so simple—there's not much on it. It's the band playing live, and it's one of their greatest performances. It's the one track that Ringo and Paul said to me, 'We were really good on this day.' It shows a sophistication as far as playing goes, how far The Beatles have come—they're basically taking what was originally a blues song and completely standing it on its head. The first thing we normally do when we remix Beatles stuff is we put the drums in the center. With 'Come Together,' we did that, and then it just didn't sound as good. So we actually took each individual drum hit and we panned the drums. They move from right to left, or right to center. On the original, they just stand in place.”<br />\n<b>Here Comes the Sun</b> \n“The biggest streaming Beatles song, the one that's the most listened to. It has a slightly more contemporary feel; it's acoustic. The one thing that the new mix of <i>Abbey Road</i> shows off is how good their backing vocals were.”<br />\n<b>I Want You (She’s So Heavy) [Trident Recording Session & Reduction Mix]</b>\n“There's so much written about how these records are created and what microphones they used and what my father's role was and what trousers people were wearing, et cetera. What excites me is when you hear someone talking and just being a guy in a studio making a piece of music that will last 50 years and beyond. What makes it great is the empathy that they have for the outside world: 'Okay, we'll do one more loud one and then we'll do one more'—and that was John Lennon, the angriest Beatle. That's why I do love the beauty of this: Great records are made by humans. They're not made by machine. The thing I look for in the demos is humanity—the creation and the sparks you hear that made the records you love.”<br />\n<b>Something (Studio Demo)</b>\n“Some demos are kind of strange. The thing about George is that there was a fragility to what he did. My dad would say that he never gave George enough time. He deserved more attention, and there is no doubt that George thought he deserved more attention as well. But George was considered a tapestry maker. He'd be in the corner with a needle and thread, working away on his music, and be very precise about things. And you get that from some demos.”<br />\n<b>The End</b>\n“The original is in mono—what we do is play the orchestra back in the studio and create a stereo sound piece. The guitar solos at the end are obviously Paul, John, and George, all playing on one track. We now separate them so you have them left-center-right, and that's probably how they were standing when they recorded them in the studio. Again, that's what I get back to: What we're trying to do is get closer to the performance. When anyone listens to <i>Abbey Road</i>, they should realize that they did play it live. They loved each other, and people can hear that now.”",
                        short: "Hear The Beatles’ penultimate album in a whole new way.",
                    },
                    isComplete: true,
                },
            },
            1573250333: {
                id: "1573250333",
                type: "albums",
                href: "/v1/catalog/us/albums/1573250333?l=en-US",
                attributes: {
                    copyright:
                        "℗ 2021 Calderstone Productions Limited (a Division of Universal Music Group) / Apple Corps Limited",
                    genreNames: [
                        "Rock",
                        "Music",
                        "Hard Rock",
                        "Pop",
                        "Psychedelic",
                        "Soft Rock",
                        "Pop/Rock",
                        "Rock & Roll",
                    ],
                    releaseDate: "1967-05-26",
                    upc: "00602438517718",
                    isMasteredForItunes: true,
                    artwork: {
                        width: 3000,
                        url: "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/64/85/d2/6485d219-91ac-5481-2668-7eab1320436d/21UMGIM57007.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "353113",
                        textColor2: "160f0f",
                        textColor4: "41341b",
                        textColor1: "060b05",
                        bgColor: "f0c84c",
                        hasP3: false,
                    },
                    playParams: {
                        id: "1573250333",
                        kind: "album",
                    },
                    url: "https://music.apple.com/us/album/sgt-peppers-lonely-hearts-club-band-remix/1573250333",
                    recordLabel: "UMC (Universal Music Catalogue)",
                    trackCount: 13,
                    isCompilation: false,
                    isPrerelease: false,
                    audioTraits: [
                        "atmos",
                        "hi-res-lossless",
                        "lossless",
                        "lossy-stereo",
                        "spatial",
                    ],
                    isSingle: false,
                    name: "Sgt. Pepper's Lonely Hearts Club Band (Remix)",
                    artistName: "The Beatles",
                    isComplete: true,
                },
            },
            1582219768: {
                id: "1582219768",
                type: "albums",
                href: "/v1/catalog/us/albums/1582219768?l=en-US",
                attributes: {
                    copyright:
                        "℗ 2021 Calderstone Productions Limited (a division of Universal Music Group)",
                    genreNames: [
                        "Rock",
                        "Music",
                        "Rock & Roll",
                        "Pop",
                        "Pop/Rock",
                        "Singer/Songwriter",
                        "Soft Rock",
                        "Arena Rock",
                    ],
                    releaseDate: "1970-05-08",
                    isMasteredForItunes: true,
                    upc: "00602438575688",
                    artwork: {
                        width: 3000,
                        url: "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/c8/6d/05/c86d05fa-8056-9b42-3483-0e9e474da327/21UMGIM61111.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "cccccc",
                        textColor2: "f1efdf",
                        textColor4: "c1bfb2",
                        textColor1: "ffffff",
                        bgColor: "010101",
                        hasP3: false,
                    },
                    playParams: {
                        id: "1582219768",
                        kind: "album",
                    },
                    url: "https://music.apple.com/us/album/let-it-be-2021-mix/1582219768",
                    recordLabel: "UMC (Universal Music Catalogue)",
                    isCompilation: false,
                    trackCount: 12,
                    isPrerelease: false,
                    audioTraits: [
                        "atmos",
                        "hi-res-lossless",
                        "lossless",
                        "lossy-stereo",
                        "spatial",
                    ],
                    isSingle: false,
                    name: "Let It Be (2021 Mix)",
                    artistName: "The Beatles",
                    editorialNotes: {
                        standard:
                            "The dissolution of The Beatles was a famously unpleasant situation: By 1968, John Lennon and Paul McCartney were sometimes working simultaneously in separate studios; only about half of the White Album’s songs featured the full band. Conceived by McCartney as an effort to reclaim the band’s marital groove, <i>Let It Be</i> presented The Beatles not as an elaborate studio art project but as four guys making music together in a room.<br />\nFor as divisive as Phil Spector’s 11th-hour contributions were (George Martin joked that he should be given a credit for production, while Spector should get one for overproduction), they were also overstated: Only a handful of tracks here—most notably Lennon’s “Across the Universe” and McCartney’s “The Long and Winding Road”—were all that heavily orchestrated. While some were chopped up and reassembled to get a better shape, the rest of the album (“Get Back”; George Harrison’s breezy “For You Blue”; the surrealistic blues of Lennon’s “Dig a Pony,” recorded live on the rooftop of the band’s Apple Corps offices) hewed more or less to what McCartney had envisioned: The Beatles rediscovering the poise and spontaneity of a great live band. (“Let It Be” was a relatively big production even before Spector came on board.)<br />\nStill, it’s a bittersweet, sometimes uncomfortable listen, and only further muddled by the eternal debate of whether or not it was actually the band’s last album, having been more or less finished before <i>Abbey Road</i> was started but not released until the band had broken up about a year later. (“And now we’d like to do ‘Hark, the Angels Come!’” Lennon squeaks in falsetto before “Let It Be”—a jab at what he felt was McCartney’s sodden pseudo-religiosity.) Still, listen and you can hear the heart, humor, and camaraderie that made them so unusual to begin with: McCartney’s “Two of Us,” the throwback “One After 909,” the eternal “Get Back.”<br />\nIn September 1969, Lennon quit. <i>Abbey Road</i> came out about a week later. McCartney effectively quit the following April, and put out his first solo record, <i>McCartney</i>, about a week later. In a self-interview that doubled as album promotion and carefully worded statement of personal independence, McCartney said that his only immediate plans were to grow up.",
                        short: "Experience their iconic final LP in an entirely new stereo remix.",
                    },
                    isComplete: true,
                },
            },
            1642995371: {
                id: "1642995371",
                type: "albums",
                href: "/v1/catalog/us/albums/1642995371?l=en-US",
                attributes: {
                    copyright:
                        "This Compilation ℗ 2022 Calderstone Productions Limited (a division of Universal Music Group)",
                    genreNames: ["Rock", "Music"],
                    releaseDate: "2022-10-28",
                    upc: "00602448516329",
                    isMasteredForItunes: true,
                    artwork: {
                        width: 3000,
                        url: "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/30/8e/f2/308ef249-a27b-0320-4ea4-ed8d938501c0/22UMGIM95893.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "d1d1cf",
                        textColor2: "cacac7",
                        textColor4: "a7a7a4",
                        textColor1: "fffffd",
                        bgColor: "1d1d1b",
                        hasP3: false,
                    },
                    playParams: {
                        id: "1642995371",
                        kind: "album",
                    },
                    url: "https://music.apple.com/us/album/revolver-2022-mix/1642995371",
                    recordLabel: "UMC (Universal Music Catalogue)",
                    isCompilation: false,
                    trackCount: 14,
                    isPrerelease: false,
                    audioTraits: [
                        "atmos",
                        "hi-res-lossless",
                        "lossless",
                        "lossy-stereo",
                        "spatial",
                    ],
                    isSingle: false,
                    name: "Revolver (2022 Mix)",
                    artistName: "The Beatles",
                    editorialNotes: {
                        standard:
                            "One of the great, possibly true stories about 1966’s <i>Revolver</i> concerns an exchange between Paul McCartney and Bob Dylan at London’s Mayfair Hotel about what they were currently working on. (In Dylan’s case, it was <i>Blonde on Blonde</i>.) On hearing the tape loops and death poetry of “Tomorrow Never Knows,” Dylan allegedly said to McCartney, “Oh, I get it. You don’t want to be cute anymore.” \n\nIt’s not entirely true. Part of what makes <i>Revolver</i> appealing is that it’s as much “Yellow Submarine” and the domestic sweetness of “Here, There and Everywhere” as it is “She Said She Said” and “Tomorrow Never Knows.” But Dylan’s point was well-taken: For a band that put out “I Want to Hold Your Hand” less than three years earlier, the relative complexity of <i>Revolver</i>—in both sound and subject matter—not only challenged The Beatles’ image as the pop band the whole family could agree on (as opposed to, say, The Rolling Stones), but it also put pop on a course toward unfamiliar horizons.\n\nNot only were The Beatles able to bridge their interest in the relatively uncommercial worlds of psychedelia, experimental, and Indian classical music with Motown (“Got to Get You Into My Life”) and what we now think of as classically Beatlesque pop (“Good Day Sunshine”), but they also gave us a template for the pop album as the kaleidoscopically varied studio construction we think of it as today. Cute, but more. \n\nOn the occasion of the album’s 2022 Super Deluxe reissue—which, in addition to a new mix in Spatial Audio by Giles Martin and Sam Okell, features some extraordinary rehearsals, outtakes, and demos—we’re taking a look back at what shaped <i>Revolver</i> and what <i>Revolver</i> shaped in turn.\n\n<b>Before: The R&B Backbeat</b>\n<i>Revolver</i> is the last Beatles album where you can really hear the influence of American soul and R&B. “Taxman” is obvious, as is “Got to Get You Into My Life,” which John called “our Tamla-Motown bit.” But you can also hear it in “And Your Bird Can Sing” and “Love You To,” whose Indian influence is anchored by a beat heavy enough to drive a dance floor regardless of the continent it’s on. And where the beat of “Tomorrow Never Knows” is rightly cited as a precursor to techno and drum ’n’ bass, it’s also a take on the syncopations of James Brown drummer Clyde Stubblefield, who said he got his style, in part, from listening to washing machines and trains—the funk of daily life. Their growing conceptual interests didn’t get in the way of their roots as a bar-and-dance band, and their ability to bridge the two—or, more importantly, to dissolve the distinction between them—is part of what makes <i>Revolver</i> <i>Revolver</i>. Four people, one room.\n\n<b>Before: British Humor and the Surrealism of Daily Life</b>\nFor however mystical <i>Revolver</i> can seem, squint and you hear an album mostly about ordinary life. “Eleanor Rigby,” “Doctor Robert,” the “Taxman,” the lovebirds of “Here, There and Everywhere,” and the eccentric of “I’m Only Sleeping”: these are the people in your neighborhood, and if they’re stranger than you remember, it might be because you never really looked. The Kinks were experts in this field. And John, in particular, was a fan of the Scottish singer Ivor Cutler, whose novelty songs masked a sense of surrealism that pointed toward more cosmic realms. The point isn’t just that <i>Revolver</i> was strange, but that it located its strangeness in places easily dismissed as familiar. So, while John borrowed the first line of “Tomorrow Never Knows” from a book connecting LSD with <i>The Tibetan Book of the Dead</i>, its title came from a more historically modest source: Ringo Starr.\n\n<b>Before: Power of the Experiment</b>\nGiven their cultural stature, it’s easy to forget that The Beatles didn’t really know what they were doing at the time. So, while <i>Revolver</i>’s experimental qualities—the tape loops of “Tomorrow Never Knows,” the dislocated horn sections of “Got to Get You Into My Life”—could seem pretentious or alienating, they’re better understood as an embrace of the same unknowns that led to “Yesterday” or “Norwegian Wood (This Bird Has Flown).” Namely, can this be done? Though the band’s interest in avant-garde composers like John Cage or Luciano Berio wasn’t always obvious in their sound, it spoke to a sense of experimentation and open-mindedness that spurred them on when they could’ve easily and comfortably stayed in the same place.\n\n<b>Before: Pop as Art</b>\nPart of The Beatles’ story is that of pop’s transformation into something like art. Not that <i>Revolver</i> was without precedent. Frank Sinatra’s serial-like string of albums in the ’50s (<i>In the Wee Small Hours</i>, <i>Only the Lonely</i>, <i>No One Cares</i>), Ray Charles’ <i>Modern Sounds in Country and Western Music</i>, the sound sculptures of producers like Phil Spector and Joe Meek, the arrangements of The Beach Boys’ <i>Pet Sounds</i>—all undoubtedly pop music. But they’re also examples of artists stretching pop to accommodate a sense of depth and conceptual ambition that hadn’t been there before. As George said around the time of <i>Revolver</i>’s release, selling a lot of records was nice. Now the point was to make them better.\n\n<b>After: Psychedelia for the Mainstream</b>\nThe real psychedelic quality of <i>Revolver</i> wasn’t its sound but its subject. Time, memory, the inevitability of death: With the exception of Bob Dylan and The Byrds, no mid-’60s pop artists were wading as deeply into inner space as The Beatles. And because, in George’s words, they’d “had a few hits,” their ideas landed on audiences that probably wouldn’t have encountered them otherwise, or at least ones that might’ve been more hesitant to hear them out. The effect was to expand our sense of the terrain that pop music could cover and introduce a sense of headiness and ambiguity that gave way to everything from Jimi Hendrix and Prince to the inward-facing stance of alternative rock. <i>Revolver</i> tried to touch what can’t be touched.\n\n<b>After: The Studio as Instrument</b>\nBefore <i>Revolver</i>, the studio was, by and large, a place where bands went to record music they’d already worked out. After <i>Revolver</i>, it became a kind of instrument of its own. It wasn’t just the unprecedented amount of time The Beatles spent making it (220 hours to <i>Rubber Soul</i>’s 80) or their experiments with new technology; it was the way they opened their process to the concept of music being less a set of notes than a sequence of sounds—an attitude that evolved into everything from dub to shoegaze to hip-hop. Paul remembers meeting with producer George Martin before they went into the studio to play him what they’d been writing. When they got to “Tomorrow Never Knows,” Martin was curious but puzzled: there were no chord changes, no verses, no chorus. In other words, it wasn’t a song. The blueprint was in the band’s collective head, but you couldn’t make sense of it until the work was done.\n\n<b>After: Pop as Playground</b>\n<i>Revolver</i> helped define the pop album as a loose, collagelike space where you could get any number of sounds and moods thrown at you. Paul’s sweetness, John’s cynicism, the experimental and the straightforward, Western R&B and Eastern classical—and each of them somehow as much a part of the band’s identity as the others. Not only was the shift an important step toward understanding artists as people who curate and arrange the world rather than creating it out of thin air, but it also gave us a template you can still hear in everything from <i>Thriller</i> to <i>Purple Rain</i>, M.I.A.’s <i>Kala</i>, and Frank Ocean’s <i>Blonde</i>. <i>Revolver</i> wasn’t just a marketing tool; it was an experience. And the band’s eclecticism wasn’t a lack of commitment—it was liberation.\n",
                        short: "Hear the album that redefined pop as you’ve never heard it before.",
                        tagline: "New Deluxe Edition",
                    },
                    isComplete: true,
                },
            },
            1643394501: {
                id: "1643394501",
                type: "albums",
                href: "/v1/catalog/us/albums/1643394501?l=en-US",
                attributes: {
                    copyright:
                        "This Compilation ℗ 2022 Calderstone Productions Limited (a division of Universal Music Group)",
                    genreNames: ["Rock", "Music"],
                    releaseDate: "2022-10-28",
                    upc: "00602448516633",
                    isMasteredForItunes: true,
                    artwork: {
                        width: 3000,
                        url: "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/cd/85/d6/cd85d67f-29c1-f554-bc11-7882d8653e22/22UMGIM95894.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "d1d1cf",
                        textColor2: "cacac7",
                        textColor4: "a7a7a4",
                        textColor1: "fffffd",
                        bgColor: "1d1d1b",
                        hasP3: false,
                    },
                    url: "https://music.apple.com/us/album/revolver-super-deluxe/1643394501",
                    playParams: {
                        id: "1643394501",
                        kind: "album",
                    },
                    recordLabel: "UMC (Universal Music Catalogue)",
                    trackCount: 63,
                    isCompilation: false,
                    isPrerelease: false,
                    audioTraits: [
                        "hi-res-lossless",
                        "lossless",
                        "lossy-stereo",
                    ],
                    isSingle: false,
                    name: "Revolver (Super Deluxe)",
                    artistName: "The Beatles",
                    editorialNotes: {
                        standard:
                            "One of the great, possibly true stories about 1966’s <i>Revolver</i> concerns an exchange between Paul McCartney and Bob Dylan at London’s Mayfair Hotel about what they were currently working on. (In Dylan’s case, it was <i>Blonde on Blonde</i>.) On hearing the tape loops and death poetry of “Tomorrow Never Knows,” Dylan allegedly said to McCartney, “Oh, I get it. You don’t want to be cute anymore.” \n\nIt’s not entirely true. Part of what makes <i>Revolver</i> appealing is that it’s as much “Yellow Submarine” and the domestic sweetness of “Here, There and Everywhere” as it is “She Said She Said” and “Tomorrow Never Knows.” But Dylan’s point was well-taken: For a band that put out “I Want to Hold Your Hand” less than three years earlier, the relative complexity of <i>Revolver</i>—in both sound and subject matter—not only challenged The Beatles’ image as the pop band the whole family could agree on (as opposed to, say, The Rolling Stones), but it also put pop on a course toward unfamiliar horizons.\n\nNot only were The Beatles able to bridge their interest in the relatively uncommercial worlds of psychedelia, experimental, and Indian classical music with Motown (“Got to Get You Into My Life”) and what we now think of as classically Beatlesque pop (“Good Day Sunshine”), but they also gave us a template for the pop album as the kaleidoscopically varied studio construction we think of it as today. Cute, but more. \n\nOn the occasion of the album’s 2022 Super Deluxe reissue—which, in addition to a new mix in Spatial Audio by Giles Martin and Sam Okell, features some extraordinary rehearsals, outtakes, and demos—we’re taking a look back at what shaped <i>Revolver</i> and what <i>Revolver</i> shaped in turn.\n\n<b>Before: The R&B Backbeat</b>\n<i>Revolver</i> is the last Beatles album where you can really hear the influence of American soul and R&B. “Taxman” is obvious, as is “Got to Get You Into My Life,” which John called “our Tamla-Motown bit.” But you can also hear it in “And Your Bird Can Sing” and “Love You To,” whose Indian influence is anchored by a beat heavy enough to drive a dance floor regardless of the continent it’s on. And where the beat of “Tomorrow Never Knows” is rightly cited as a precursor to techno and drum ’n’ bass, it’s also a take on the syncopations of James Brown drummer Clyde Stubblefield, who said he got his style, in part, from listening to washing machines and trains—the funk of daily life. Their growing conceptual interests didn’t get in the way of their roots as a bar-and-dance band, and their ability to bridge the two—or, more importantly, to dissolve the distinction between them—is part of what makes <i>Revolver</i> <i>Revolver</i>. Four people, one room.\n\n<b>Before: British Humor and the Surrealism of Daily Life</b>\nFor however mystical <i>Revolver</i> can seem, squint and you hear an album mostly about ordinary life. “Eleanor Rigby,” “Doctor Robert,” the “Taxman,” the lovebirds of “Here, There and Everywhere,” and the eccentric of “I’m Only Sleeping”: these are the people in your neighborhood, and if they’re stranger than you remember, it might be because you never really looked. The Kinks were experts in this field. And John, in particular, was a fan of the Scottish singer Ivor Cutler, whose novelty songs masked a sense of surrealism that pointed toward more cosmic realms. The point isn’t just that <i>Revolver</i> was strange, but that it located its strangeness in places easily dismissed as familiar. So, while John borrowed the first line of “Tomorrow Never Knows” from a book connecting LSD with <i>The Tibetan Book of the Dead</i>, its title came from a more historically modest source: Ringo Starr.\n\n<b>Before: Power of the Experiment</b>\nGiven their cultural stature, it’s easy to forget that The Beatles didn’t really know what they were doing at the time. So, while <i>Revolver</i>’s experimental qualities—the tape loops of “Tomorrow Never Knows,” the dislocated horn sections of “Got to Get You Into My Life”—could seem pretentious or alienating, they’re better understood as an embrace of the same unknowns that led to “Yesterday” or “Norwegian Wood (This Bird Has Flown).” Namely, can this be done? Though the band’s interest in avant-garde composers like John Cage or Luciano Berio wasn’t always obvious in their sound, it spoke to a sense of experimentation and open-mindedness that spurred them on when they could’ve easily and comfortably stayed in the same place.\n\n<b>Before: Pop as Art</b>\nPart of The Beatles’ story is that of pop’s transformation into something like art. Not that <i>Revolver</i> was without precedent. Frank Sinatra’s serial-like string of albums in the ’50s (<i>In the Wee Small Hours</i>, <i>Only the Lonely</i>, <i>No One Cares</i>), Ray Charles’ <i>Modern Sounds in Country and Western Music</i>, the sound sculptures of producers like Phil Spector and Joe Meek, the arrangements of The Beach Boys’ <i>Pet Sounds</i>—all undoubtedly pop music. But they’re also examples of artists stretching pop to accommodate a sense of depth and conceptual ambition that hadn’t been there before. As George said around the time of <i>Revolver</i>’s release, selling a lot of records was nice. Now the point was to make them better.\n\n<b>After: Psychedelia for the Mainstream</b>\nThe real psychedelic quality of <i>Revolver</i> wasn’t its sound but its subject. Time, memory, the inevitability of death: With the exception of Bob Dylan and The Byrds, no mid-’60s pop artists were wading as deeply into inner space as The Beatles. And because, in George’s words, they’d “had a few hits,” their ideas landed on audiences that probably wouldn’t have encountered them otherwise, or at least ones that might’ve been more hesitant to hear them out. The effect was to expand our sense of the terrain that pop music could cover and introduce a sense of headiness and ambiguity that gave way to everything from Jimi Hendrix and Prince to the inward-facing stance of alternative rock. <i>Revolver</i> tried to touch what can’t be touched.\n\n<b>After: The Studio as Instrument</b>\nBefore <i>Revolver</i>, the studio was, by and large, a place where bands went to record music they’d already worked out. After <i>Revolver</i>, it became a kind of instrument of its own. It wasn’t just the unprecedented amount of time The Beatles spent making it (220 hours to <i>Rubber Soul</i>’s 80) or their experiments with new technology; it was the way they opened their process to the concept of music being less a set of notes than a sequence of sounds—an attitude that evolved into everything from dub to shoegaze to hip-hop. Paul remembers meeting with producer George Martin before they went into the studio to play him what they’d been writing. When they got to “Tomorrow Never Knows,” Martin was curious but puzzled: there were no chord changes, no verses, no chorus. In other words, it wasn’t a song. The blueprint was in the band’s collective head, but you couldn’t make sense of it until the work was done.\n\n<b>After: Pop as Playground</b>\n<i>Revolver</i> helped define the pop album as a loose, collagelike space where you could get any number of sounds and moods thrown at you. Paul’s sweetness, John’s cynicism, the experimental and the straightforward, Western R&B and Eastern classical—and each of them somehow as much a part of the band’s identity as the others. Not only was the shift an important step toward understanding artists as people who curate and arrange the world rather than creating it out of thin air, but it also gave us a template you can still hear in everything from <i>Thriller</i> to <i>Purple Rain</i>, M.I.A.’s <i>Kala</i>, and Frank Ocean’s <i>Blonde</i>. <i>Revolver</i> wasn’t just a marketing tool; it was an experience. And the band’s eclecticism wasn’t a lack of commitment—it was liberation.\n",
                        short: "Hear the album that redefined pop as you’ve never heard it before.",
                        tagline: "New Deluxe Edition",
                    },
                    isComplete: true,
                },
            },
        },
        songs: {
            1441133277: {
                id: "1441133277",
                type: "songs",
                href: "/v1/catalog/us/songs/1441133277?l=en-US",
                attributes: {
                    hasTimeSyncedLyrics: true,
                    albumName: "The Beatles 1967-1970 (The Blue Album)",
                    genreNames: ["Rock", "Music"],
                    trackNumber: 13,
                    releaseDate: "1968-08-26",
                    durationInMillis: 431333,
                    isMasteredForItunes: true,
                    isrc: "GBAYE0900596",
                    artwork: {
                        width: 3000,
                        url: "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/a6/8b/65/a68b657c-cac6-68e6-3bde-b79d58fbc795/18UMGIM30762.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "c6daec",
                        textColor2: "d1dbed",
                        textColor4: "a9bede",
                        textColor1: "f5feff",
                        bgColor: "0c4ca3",
                        hasP3: false,
                    },
                    composerName: "John Lennon & Paul McCartney",
                    audioLocale: "en-US",
                    playParams: {
                        id: "1441133277",
                        kind: "song",
                    },
                    url: "https://music.apple.com/us/album/hey-jude/1441133100?i=1441133277",
                    discNumber: 1,
                    hasLyrics: true,
                    isAppleDigitalMaster: true,
                    audioTraits: ["lossless", "lossy-stereo"],
                    name: "Hey Jude",
                    previews: [
                        {
                            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/3b/ef/5e/3bef5efe-973b-7680-18b2-5298380fbbe2/mzaf_17263020089865440864.plus.aac.ep.m4a",
                        },
                    ],
                    artistName: "The Beatles",
                },
                meta: {
                    formerIds: ["400835962"],
                },
            },
            1441133613: {
                id: "1441133613",
                type: "songs",
                href: "/v1/catalog/us/songs/1441133613?l=en-US",
                attributes: {
                    hasTimeSyncedLyrics: true,
                    albumName: "The Beatles (The White Album)",
                    genreNames: ["Rock", "Music"],
                    trackNumber: 4,
                    durationInMillis: 188960,
                    releaseDate: "1968-11-22",
                    isMasteredForItunes: true,
                    isrc: "GBAYE0601647",
                    artwork: {
                        width: 3000,
                        url: "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/fa/5b/89/fa5b898d-bad6-e053-4195-260e5c74f2bb/00602567725466.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "3c3b3b",
                        textColor2: "0c0a0a",
                        textColor4: "3c3b3b",
                        textColor1: "0c0a0a",
                        bgColor: "ffffff",
                        hasP3: false,
                    },
                    composerName: "John Lennon & Paul McCartney",
                    audioLocale: "en-US",
                    url: "https://music.apple.com/us/album/ob-la-di-ob-la-da/1441133180?i=1441133613",
                    playParams: {
                        id: "1441133613",
                        kind: "song",
                    },
                    discNumber: 1,
                    hasLyrics: true,
                    isAppleDigitalMaster: true,
                    audioTraits: ["lossless", "lossy-stereo"],
                    name: "Ob-La-Di, Ob-La-Da",
                    previews: [
                        {
                            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/9e/c4/f1/9ec4f117-0f5d-7c98-6980-78c25f156803/mzaf_873121163231037931.plus.aac.ep.m4a",
                        },
                    ],
                    artistName: "The Beatles",
                },
                meta: {
                    formerIds: ["401126263"],
                },
            },
            1441133632: {
                id: "1441133632",
                type: "songs",
                href: "/v1/catalog/us/songs/1441133632?l=en-US",
                attributes: {
                    hasTimeSyncedLyrics: true,
                    albumName: "Past Masters, Vols. 1 & 2",
                    genreNames: ["Rock", "Music"],
                    trackNumber: 6,
                    durationInMillis: 146533,
                    releaseDate: "1963-11-29",
                    isMasteredForItunes: true,
                    isrc: "GBAYE0801384",
                    artwork: {
                        width: 3000,
                        url: "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/01/69/02/01690216-48fc-1c54-b1de-48170d16b1c3/00602567725268.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "cbcbcb",
                        textColor2: "dedede",
                        textColor4: "b1b1b1",
                        textColor1: "ffffff",
                        bgColor: "000000",
                        hasP3: false,
                    },
                    composerName: "Paul McCartney & John Lennon",
                    audioLocale: "en-US",
                    playParams: {
                        id: "1441133632",
                        kind: "song",
                    },
                    url: "https://music.apple.com/us/album/i-want-to-hold-your-hand/1441133181?i=1441133632",
                    discNumber: 1,
                    hasLyrics: true,
                    isAppleDigitalMaster: true,
                    audioTraits: ["lossless", "lossy-stereo"],
                    name: "I Want to Hold Your Hand",
                    previews: [
                        {
                            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/aa/d7/e9/aad7e93e-65c9-1695-d835-d957a999123d/mzaf_13567255205425971982.plus.aac.p.m4a",
                        },
                    ],
                    artistName: "The Beatles",
                },
                meta: {
                    formerIds: ["400851258"],
                },
            },
            1441133644: {
                id: "1441133644",
                type: "songs",
                href: "/v1/catalog/us/songs/1441133644?l=en-US",
                attributes: {
                    hasTimeSyncedLyrics: true,
                    albumName: "The Beatles (The White Album)",
                    genreNames: ["Rock", "Music"],
                    trackNumber: 7,
                    durationInMillis: 285000,
                    releaseDate: "1968-11-22",
                    isMasteredForItunes: true,
                    isrc: "GBAYE0601650",
                    artwork: {
                        width: 3000,
                        url: "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/fa/5b/89/fa5b898d-bad6-e053-4195-260e5c74f2bb/00602567725466.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "3c3b3b",
                        textColor2: "0c0a0a",
                        textColor4: "3c3b3b",
                        textColor1: "0c0a0a",
                        bgColor: "ffffff",
                        hasP3: false,
                    },
                    composerName: "George Harrison",
                    audioLocale: "en-US",
                    playParams: {
                        id: "1441133644",
                        kind: "song",
                    },
                    url: "https://music.apple.com/us/album/while-my-guitar-gently-weeps/1441133180?i=1441133644",
                    discNumber: 1,
                    isAppleDigitalMaster: true,
                    hasLyrics: true,
                    audioTraits: ["lossless", "lossy-stereo"],
                    name: "While My Guitar Gently Weeps",
                    previews: [
                        {
                            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/85/aa/2c/85aa2cd7-f2bb-dd20-48c4-5172a3e44c54/mzaf_11411588853120603001.plus.aac.ep.m4a",
                        },
                    ],
                    artistName: "The Beatles",
                },
                meta: {
                    formerIds: ["401126346"],
                },
            },
            1441133834: {
                id: "1441133834",
                type: "songs",
                href: "/v1/catalog/us/songs/1441133834?l=en-US",
                attributes: {
                    albumName: "The Beatles (The White Album)",
                    hasTimeSyncedLyrics: true,
                    genreNames: ["Rock", "Music"],
                    trackNumber: 11,
                    releaseDate: "1968-11-22",
                    durationInMillis: 138387,
                    isMasteredForItunes: true,
                    isrc: "GBAYE0601654",
                    artwork: {
                        width: 3000,
                        url: "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/fa/5b/89/fa5b898d-bad6-e053-4195-260e5c74f2bb/00602567725466.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "3c3b3b",
                        textColor2: "0c0a0a",
                        textColor4: "3c3b3b",
                        textColor1: "0c0a0a",
                        bgColor: "ffffff",
                        hasP3: false,
                    },
                    composerName: "John Lennon & Paul McCartney",
                    audioLocale: "en-US",
                    playParams: {
                        id: "1441133834",
                        kind: "song",
                    },
                    url: "https://music.apple.com/us/album/blackbird/1441133180?i=1441133834",
                    discNumber: 1,
                    isAppleDigitalMaster: true,
                    hasLyrics: true,
                    audioTraits: ["lossless", "lossy-stereo"],
                    name: "Blackbird",
                    previews: [
                        {
                            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/10/e8/96/10e89630-4b7b-77d4-af63-829d597340ba/mzaf_842543440499453757.plus.aac.p.m4a",
                        },
                    ],
                    artistName: "The Beatles",
                },
                meta: {
                    formerIds: ["401126396"],
                },
            },
            1441163771: {
                id: "1441163771",
                type: "songs",
                href: "/v1/catalog/us/songs/1441163771?l=en-US",
                attributes: {
                    albumName: "Magical Mystery Tour",
                    hasTimeSyncedLyrics: true,
                    genreNames: ["Rock", "Music"],
                    trackNumber: 8,
                    releaseDate: "1967-02-13",
                    durationInMillis: 247320,
                    isMasteredForItunes: true,
                    isrc: "GBAYE0601640",
                    artwork: {
                        width: 3000,
                        url: "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/43/0e/37/430e3790-75d5-c96a-1380-f9d9803aa700/18UMGIM31245.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "2e2906",
                        textColor2: "530801",
                        textColor4: "712f03",
                        textColor1: "000104",
                        bgColor: "e9cb0b",
                        hasP3: false,
                    },
                    composerName: "John Lennon & Paul McCartney",
                    audioLocale: "en-US",
                    playParams: {
                        id: "1441163771",
                        kind: "song",
                    },
                    url: "https://music.apple.com/us/album/strawberry-fields-forever/1441163490?i=1441163771",
                    discNumber: 1,
                    isAppleDigitalMaster: true,
                    hasLyrics: true,
                    audioTraits: [
                        "atmos",
                        "lossless",
                        "lossy-stereo",
                        "spatial",
                    ],
                    name: "Strawberry Fields Forever",
                    previews: [
                        {
                            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/b4/76/07/b476078f-3f38-5ecb-90a6-be1e4afc61c7/mzaf_11067799187732123480.plus.aac.ep.m4a",
                        },
                    ],
                    artistName: "The Beatles",
                },
                meta: {
                    formerIds: ["401145202"],
                },
            },
            1441164430: {
                id: "1441164430",
                type: "songs",
                href: "/v1/catalog/us/songs/1441164430?l=en-US",
                attributes: {
                    albumName: "Abbey Road (Remastered)",
                    hasTimeSyncedLyrics: true,
                    genreNames: ["Rock", "Music"],
                    trackNumber: 1,
                    releaseDate: "1969-09-26",
                    durationInMillis: 258947,
                    isMasteredForItunes: true,
                    isrc: "GBAYE0601690",
                    artwork: {
                        width: 3000,
                        url: "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/df/db/61/dfdb615d-47f8-06e9-9533-b96daccc029f/18UMGIM31076.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "c3c7b6",
                        textColor2: "acdcf9",
                        textColor4: "8eb6cf",
                        textColor1: "eff1d9",
                        bgColor: "161d29",
                        hasP3: false,
                    },
                    composerName: "John Lennon & Paul McCartney",
                    audioLocale: "en-US",
                    playParams: {
                        id: "1441164430",
                        kind: "song",
                    },
                    url: "https://music.apple.com/us/album/come-together/1441164426?i=1441164430",
                    discNumber: 1,
                    isAppleDigitalMaster: true,
                    hasLyrics: true,
                    audioTraits: ["lossless", "lossy-stereo"],
                    name: "Come Together",
                    previews: [
                        {
                            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/e6/11/ba/e611ba4f-4299-d009-745b-1742900514f2/mzaf_2520831144968056492.plus.aac.ep.m4a",
                        },
                    ],
                    artistName: "The Beatles",
                },
                meta: {
                    formerIds: ["401186260"],
                },
            },
            1441164536: {
                id: "1441164536",
                type: "songs",
                href: "/v1/catalog/us/songs/1441164536?l=en-US",
                attributes: {
                    albumName: "Help!",
                    hasTimeSyncedLyrics: true,
                    genreNames: ["Pop", "Music"],
                    trackNumber: 1,
                    releaseDate: "1965-07-19",
                    durationInMillis: 138560,
                    isMasteredForItunes: true,
                    isrc: "GBAYE0601465",
                    artwork: {
                        width: 3000,
                        url: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/1a/19/db/1a19db26-17ad-b986-11a9-f72ac7a6194b/18UMGIM31214.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "3c3c3c",
                        textColor2: "012939",
                        textColor4: "345461",
                        textColor1: "0b0b0b",
                        bgColor: "ffffff",
                        hasP3: false,
                    },
                    composerName: "John Lennon & Paul McCartney",
                    audioLocale: "en-US",
                    playParams: {
                        id: "1441164536",
                        kind: "song",
                    },
                    url: "https://music.apple.com/us/album/help/1441164524?i=1441164536",
                    discNumber: 1,
                    isAppleDigitalMaster: true,
                    hasLyrics: true,
                    audioTraits: ["lossless", "lossy-stereo"],
                    name: "Help!",
                    previews: [
                        {
                            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/2f/9d/d0/2f9dd093-1666-1048-8f89-04ec5e6baf6f/mzaf_18394656747594210325.plus.aac.p.m4a",
                        },
                    ],
                    artistName: "The Beatles",
                },
                meta: {
                    formerIds: ["401138169"],
                },
            },
            1441164589: {
                id: "1441164589",
                type: "songs",
                href: "/v1/catalog/us/songs/1441164589?l=en-US",
                attributes: {
                    hasTimeSyncedLyrics: true,
                    albumName: "Abbey Road (Remastered)",
                    genreNames: ["Rock", "Music"],
                    trackNumber: 7,
                    durationInMillis: 185733,
                    releaseDate: "1969-09-26",
                    isMasteredForItunes: true,
                    isrc: "GBAYE0601696",
                    artwork: {
                        width: 3000,
                        url: "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/df/db/61/dfdb615d-47f8-06e9-9533-b96daccc029f/18UMGIM31076.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "c3c7b6",
                        textColor2: "acdcf9",
                        textColor4: "8eb6cf",
                        textColor1: "eff1d9",
                        bgColor: "161d29",
                        hasP3: false,
                    },
                    composerName: "George Harrison",
                    audioLocale: "en-US",
                    playParams: {
                        id: "1441164589",
                        kind: "song",
                    },
                    url: "https://music.apple.com/us/album/here-comes-the-sun/1441164426?i=1441164589",
                    discNumber: 1,
                    isAppleDigitalMaster: true,
                    hasLyrics: true,
                    audioTraits: [
                        "atmos",
                        "lossless",
                        "lossy-stereo",
                        "spatial",
                    ],
                    name: "Here Comes the Sun",
                    previews: [
                        {
                            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/4e/3a/1a/4e3a1ace-fffd-9a83-0106-2e3795f43d4f/mzaf_2447020115464728619.plus.aac.ep.m4a",
                        },
                    ],
                    artistName: "The Beatles",
                },
                meta: {
                    formerIds: ["401187150"],
                },
            },
            1441164738: {
                id: "1441164738",
                type: "songs",
                href: "/v1/catalog/us/songs/1441164738?l=en-US",
                attributes: {
                    albumName: "Let It Be",
                    hasTimeSyncedLyrics: true,
                    genreNames: ["Rock", "Music"],
                    trackNumber: 6,
                    releaseDate: "1970-03-06",
                    durationInMillis: 243027,
                    isMasteredForItunes: true,
                    isrc: "GBAYE0601713",
                    artwork: {
                        width: 3000,
                        url: "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/ae/98/4c/ae984c7a-cd06-a7cd-e8bf-32cb15ba698d/00602567705475.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "c4c3c3",
                        textColor2: "f6b88c",
                        textColor4: "c49370",
                        textColor1: "f6f3f4",
                        bgColor: "000000",
                        hasP3: false,
                    },
                    composerName: "John Lennon & Paul McCartney",
                    audioLocale: "en-US",
                    url: "https://music.apple.com/us/album/let-it-be/1441164495?i=1441164738",
                    playParams: {
                        id: "1441164738",
                        kind: "song",
                    },
                    discNumber: 1,
                    isAppleDigitalMaster: true,
                    hasLyrics: true,
                    audioTraits: ["lossless", "lossy-stereo"],
                    name: "Let It Be",
                    previews: [
                        {
                            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/29/61/b7/2961b729-d447-ff81-a410-9ca15d3d0843/mzaf_1730646339988905266.plus.aac.ep.m4a",
                        },
                    ],
                    artistName: "The Beatles",
                },
                meta: {
                    formerIds: ["401151904"],
                },
            },
            1441164805: {
                id: "1441164805",
                type: "songs",
                href: "/v1/catalog/us/songs/1441164805?l=en-US",
                attributes: {
                    hasTimeSyncedLyrics: true,
                    albumName: "Help!",
                    genreNames: ["Rock", "Music"],
                    trackNumber: 13,
                    durationInMillis: 125667,
                    releaseDate: "1965-08-06",
                    isMasteredForItunes: true,
                    isrc: "GBAYE0601477",
                    artwork: {
                        width: 3000,
                        url: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/1a/19/db/1a19db26-17ad-b986-11a9-f72ac7a6194b/18UMGIM31214.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "3c3c3c",
                        textColor2: "012939",
                        textColor4: "345461",
                        textColor1: "0b0b0b",
                        bgColor: "ffffff",
                        hasP3: false,
                    },
                    composerName: "John Lennon & Paul McCartney",
                    audioLocale: "en-US",
                    playParams: {
                        id: "1441164805",
                        kind: "song",
                    },
                    url: "https://music.apple.com/us/album/yesterday/1441164524?i=1441164805",
                    discNumber: 1,
                    isAppleDigitalMaster: true,
                    hasLyrics: true,
                    audioTraits: [
                        "atmos",
                        "lossless",
                        "lossy-stereo",
                        "spatial",
                    ],
                    name: "Yesterday",
                    previews: [
                        {
                            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/ac/69/f4/ac69f493-83b1-42d3-22aa-43c342f3251e/mzaf_10291975402098542849.plus.aac.p.m4a",
                        },
                    ],
                    artistName: "The Beatles",
                },
                meta: {
                    formerIds: ["401138311"],
                },
            },
            1441164806: {
                id: "1441164806",
                type: "songs",
                href: "/v1/catalog/us/songs/1441164806?l=en-US",
                attributes: {
                    hasTimeSyncedLyrics: true,
                    albumName: "Revolver",
                    genreNames: ["Rock", "Music"],
                    trackNumber: 2,
                    releaseDate: "1966-08-05",
                    durationInMillis: 126533,
                    isMasteredForItunes: true,
                    isrc: "GBAYE0601494",
                    artwork: {
                        width: 3000,
                        url: "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/58/4a/10/584a1058-de0a-6a6b-d0bd-da09a028b8bc/00602567705499.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "3d3d3d",
                        textColor2: "262424",
                        textColor4: "4d4b4c",
                        textColor1: "121212",
                        bgColor: "eaeaea",
                        hasP3: false,
                    },
                    composerName: "John Lennon & Paul McCartney",
                    audioLocale: "en-US",
                    playParams: {
                        id: "1441164806",
                        kind: "song",
                    },
                    url: "https://music.apple.com/us/album/eleanor-rigby/1441164670?i=1441164806",
                    discNumber: 1,
                    hasLyrics: true,
                    isAppleDigitalMaster: true,
                    audioTraits: ["lossless", "lossy-stereo"],
                    name: "Eleanor Rigby",
                    previews: [
                        {
                            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/13/30/df/1330df8c-8235-df91-8d8f-4b12174a6afa/mzaf_13939545437886156645.plus.aac.p.m4a",
                        },
                    ],
                    artistName: "The Beatles",
                },
                meta: {
                    formerIds: ["401136644"],
                },
            },
            1441164829: {
                id: "1441164829",
                type: "songs",
                href: "/v1/catalog/us/songs/1441164829?l=en-US",
                attributes: {
                    albumName: "Rubber Soul",
                    hasTimeSyncedLyrics: true,
                    genreNames: ["Rock", "Music"],
                    trackNumber: 11,
                    releaseDate: "1965-12-03",
                    durationInMillis: 146333,
                    isMasteredForItunes: true,
                    isrc: "GBAYE0601489",
                    artwork: {
                        width: 3000,
                        url: "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/af/20/aa/af20aa89-4002-11fb-25d8-ff544af67eb4/00602567725404.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "ba5d1f",
                        textColor2: "eb6311",
                        textColor4: "bd5310",
                        textColor1: "e76f24",
                        bgColor: "05150a",
                        hasP3: false,
                    },
                    composerName: "Paul McCartney & John Lennon",
                    audioLocale: "en-US",
                    url: "https://music.apple.com/us/album/in-my-life/1441164359?i=1441164829",
                    playParams: {
                        id: "1441164829",
                        kind: "song",
                    },
                    discNumber: 1,
                    isAppleDigitalMaster: true,
                    hasLyrics: true,
                    audioTraits: ["lossless", "lossy-stereo"],
                    name: "In My Life",
                    previews: [
                        {
                            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5c/77/c1/5c77c105-9a32-bee4-0ffa-76244dacb60a/mzaf_5900747299452570221.plus.aac.p.m4a",
                        },
                    ],
                    artistName: "The Beatles",
                },
                meta: {
                    formerIds: ["401135195"],
                },
            },
            1441165136: {
                id: "1441165136",
                type: "songs",
                href: "/v1/catalog/us/songs/1441165136?l=en-US",
                attributes: {
                    albumName: "Please Please Me",
                    hasTimeSyncedLyrics: true,
                    genreNames: ["Rock", "Music"],
                    trackNumber: 14,
                    releaseDate: "1963-03-22",
                    durationInMillis: 153225,
                    isMasteredForItunes: true,
                    isrc: "GBAYE0601423",
                    artwork: {
                        width: 3000,
                        url: "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/9c/ff/b5/9cffb5a6-a37f-c84a-7240-0333a071bc92/00602567725275.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "52514c",
                        textColor2: "2b261e",
                        textColor4: "55514b",
                        textColor1: "272620",
                        bgColor: "ffffff",
                        hasP3: false,
                    },
                    composerName: "Bert Russell & Phil Medley",
                    audioLocale: "en-US",
                    playParams: {
                        id: "1441165136",
                        kind: "song",
                    },
                    url: "https://music.apple.com/us/album/twist-and-shout/1441164816?i=1441165136",
                    discNumber: 1,
                    isAppleDigitalMaster: true,
                    hasLyrics: true,
                    audioTraits: ["lossless", "lossy-stereo"],
                    name: "Twist and Shout",
                    previews: [
                        {
                            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3f/85/82/3f8582c2-0d45-b964-019c-1d07dff1fbf5/mzaf_16554853967506794574.plus.aac.ep.m4a",
                        },
                    ],
                    artistName: "The Beatles",
                },
                meta: {
                    formerIds: ["401129930"],
                },
            },
            1474815799: {
                id: "1474815799",
                type: "songs",
                href: "/v1/catalog/us/songs/1474815799?l=en-US",
                attributes: {
                    hasTimeSyncedLyrics: true,
                    albumName: "Abbey Road (2019 Mix)",
                    genreNames: ["Rock", "Music"],
                    trackNumber: 1,
                    durationInMillis: 260200,
                    releaseDate: "2019-09-20",
                    isMasteredForItunes: true,
                    isrc: "GBUM71903329",
                    artwork: {
                        width: 3000,
                        url: "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/f6/db/94/f6db94bd-35f8-2806-6459-dee4fbd85c68/19UMGIM68354.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "91b6cc",
                        textColor2: "42afef",
                        textColor4: "398fc3",
                        textColor1: "b0dffa",
                        bgColor: "140f13",
                        hasP3: false,
                    },
                    composerName: "John Lennon & Paul McCartney",
                    audioLocale: "en-US",
                    playParams: {
                        id: "1474815799",
                        kind: "song",
                    },
                    url: "https://music.apple.com/us/album/come-together-2019-mix/1474815798?i=1474815799",
                    discNumber: 1,
                    hasLyrics: true,
                    isAppleDigitalMaster: true,
                    audioTraits: [
                        "atmos",
                        "hi-res-lossless",
                        "lossless",
                        "lossy-stereo",
                        "spatial",
                    ],
                    name: "Come Together (2019 Mix)",
                    previews: [
                        {
                            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/e1/9a/1e/e19a1ef0-94b3-7aae-e7e8-f24f5bc33f72/mzaf_8844964961648435566.plus.aac.ep.m4a",
                        },
                    ],
                    artistName: "The Beatles",
                },
            },
            1474815801: {
                id: "1474815801",
                type: "songs",
                href: "/v1/catalog/us/songs/1474815801?l=en-US",
                attributes: {
                    hasTimeSyncedLyrics: true,
                    albumName: "Abbey Road (2019 Mix)",
                    genreNames: ["Rock", "Music"],
                    trackNumber: 2,
                    durationInMillis: 182227,
                    releaseDate: "2019-08-07",
                    isMasteredForItunes: true,
                    isrc: "GBUM71903330",
                    artwork: {
                        width: 3000,
                        url: "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/f6/db/94/f6db94bd-35f8-2806-6459-dee4fbd85c68/19UMGIM68354.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "91b6cc",
                        textColor2: "42afef",
                        textColor4: "398fc3",
                        textColor1: "b0dffa",
                        bgColor: "140f13",
                        hasP3: false,
                    },
                    composerName: "George Harrison",
                    audioLocale: "en-US",
                    playParams: {
                        id: "1474815801",
                        kind: "song",
                    },
                    url: "https://music.apple.com/us/album/something-2019-mix/1474815798?i=1474815801",
                    discNumber: 1,
                    isAppleDigitalMaster: true,
                    hasLyrics: true,
                    audioTraits: [
                        "atmos",
                        "hi-res-lossless",
                        "lossless",
                        "lossy-stereo",
                        "spatial",
                    ],
                    name: "Something (2019 Mix)",
                    previews: [
                        {
                            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/d8/a1/f4/d8a1f413-6d76-f172-d8c9-7b8494b7758a/mzaf_16844922841030560059.plus.aac.ep.m4a",
                        },
                    ],
                    artistName: "The Beatles",
                },
            },
            1474815898: {
                id: "1474815898",
                type: "songs",
                href: "/v1/catalog/us/songs/1474815898?l=en-US",
                attributes: {
                    albumName: "Abbey Road (2019 Mix)",
                    hasTimeSyncedLyrics: true,
                    genreNames: ["Rock", "Music"],
                    trackNumber: 7,
                    releaseDate: "1969-09-26",
                    durationInMillis: 185707,
                    isMasteredForItunes: true,
                    isrc: "GBUM71903335",
                    artwork: {
                        width: 3000,
                        url: "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/f6/db/94/f6db94bd-35f8-2806-6459-dee4fbd85c68/19UMGIM68354.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "91b6cc",
                        textColor2: "42afef",
                        textColor4: "398fc3",
                        textColor1: "b0dffa",
                        bgColor: "140f13",
                        hasP3: false,
                    },
                    composerName: "George Harrison",
                    audioLocale: "en-US",
                    playParams: {
                        id: "1474815898",
                        kind: "song",
                    },
                    url: "https://music.apple.com/us/album/here-comes-the-sun-2019-mix/1474815798?i=1474815898",
                    discNumber: 1,
                    isAppleDigitalMaster: true,
                    hasLyrics: true,
                    audioTraits: [
                        "atmos",
                        "hi-res-lossless",
                        "lossless",
                        "lossy-stereo",
                        "spatial",
                    ],
                    name: "Here Comes the Sun (2019 Mix)",
                    previews: [
                        {
                            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/2e/60/69/2e60690e-88b6-d589-78d4-fa7c837f07a3/mzaf_13203412569384135497.plus.aac.ep.m4a",
                        },
                    ],
                    artistName: "The Beatles",
                },
            },
            1474833934: {
                id: "1474833934",
                type: "songs",
                href: "/v1/catalog/us/songs/1474833934?l=en-US",
                attributes: {
                    hasTimeSyncedLyrics: true,
                    albumName: "Abbey Road (Super Deluxe Edition)",
                    genreNames: ["Rock", "Music"],
                    trackNumber: 7,
                    releaseDate: "1969-09-26",
                    durationInMillis: 185707,
                    isMasteredForItunes: true,
                    isrc: "GBUM71903335",
                    artwork: {
                        width: 3000,
                        url: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/29/77/1d/29771d4e-a301-6e48-99de-1300b3f63f15/19UMGIM68356.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "91b6cc",
                        textColor2: "42afef",
                        textColor4: "398fc3",
                        textColor1: "b0dffa",
                        bgColor: "140f13",
                        hasP3: false,
                    },
                    composerName: "George Harrison",
                    audioLocale: "en-US",
                    url: "https://music.apple.com/us/album/here-comes-the-sun-2019-mix/1474833332?i=1474833934",
                    playParams: {
                        id: "1474833934",
                        kind: "song",
                    },
                    discNumber: 1,
                    isAppleDigitalMaster: true,
                    hasLyrics: true,
                    audioTraits: [
                        "atmos",
                        "hi-res-lossless",
                        "lossless",
                        "lossy-stereo",
                        "spatial",
                    ],
                    name: "Here Comes the Sun (2019 Mix)",
                    previews: [
                        {
                            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/84/fa/bc/84fabc1f-d293-b2cb-c130-c224f9218874/mzaf_2510078201972509243.plus.aac.ep.m4a",
                        },
                    ],
                    artistName: "The Beatles",
                },
            },
            1573250861: {
                id: "1573250861",
                type: "songs",
                href: "/v1/catalog/us/songs/1573250861?l=en-US",
                attributes: {
                    albumName: "Sgt. Pepper's Lonely Hearts Club Band (Remix)",
                    hasTimeSyncedLyrics: true,
                    genreNames: ["Rock", "Music"],
                    trackNumber: 3,
                    releaseDate: "1967-05-26",
                    durationInMillis: 207680,
                    isMasteredForItunes: true,
                    isrc: "GBUM71700954",
                    artwork: {
                        width: 3000,
                        url: "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/64/85/d2/6485d219-91ac-5481-2668-7eab1320436d/21UMGIM57007.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "353113",
                        textColor2: "160f0f",
                        textColor4: "41341b",
                        textColor1: "060b05",
                        bgColor: "f0c84c",
                        hasP3: false,
                    },
                    composerName: "John Lennon & Paul McCartney",
                    audioLocale: "en-US",
                    url: "https://music.apple.com/us/album/lucy-in-the-sky-with-diamonds-remix/1573250333?i=1573250861",
                    playParams: {
                        id: "1573250861",
                        kind: "song",
                    },
                    discNumber: 1,
                    isAppleDigitalMaster: true,
                    hasLyrics: true,
                    audioTraits: [
                        "atmos",
                        "hi-res-lossless",
                        "lossless",
                        "lossy-stereo",
                        "spatial",
                    ],
                    name: "Lucy In the Sky with Diamonds (Remix)",
                    previews: [
                        {
                            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/4c/59/e9/4c59e905-cf47-39e1-4354-507e1684f654/mzaf_12389806499192402191.plus.aac.ep.m4a",
                        },
                    ],
                    artistName: "The Beatles",
                },
            },
            1582223667: {
                id: "1582223667",
                type: "songs",
                href: "/v1/catalog/us/songs/1582223667?l=en-US",
                attributes: {
                    albumName: "Let It Be (2021 Mix)",
                    hasTimeSyncedLyrics: true,
                    genreNames: ["Rock", "Music"],
                    trackNumber: 6,
                    releaseDate: "2021-08-28",
                    durationInMillis: 243173,
                    isMasteredForItunes: true,
                    isrc: "GBUM72006886",
                    artwork: {
                        width: 3000,
                        url: "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/c8/6d/05/c86d05fa-8056-9b42-3483-0e9e474da327/21UMGIM61111.rgb.jpg/440x440bb.jpg",
                        height: 3000,
                        textColor3: "cccccc",
                        textColor2: "f1efdf",
                        textColor4: "c1bfb2",
                        textColor1: "ffffff",
                        bgColor: "010101",
                        hasP3: false,
                    },
                    composerName: "John Lennon & Paul McCartney",
                    audioLocale: "en-US",
                    url: "https://music.apple.com/us/album/let-it-be-2021-mix/1582219768?i=1582223667",
                    playParams: {
                        id: "1582223667",
                        kind: "song",
                    },
                    discNumber: 1,
                    isAppleDigitalMaster: true,
                    hasLyrics: true,
                    audioTraits: [
                        "atmos",
                        "hi-res-lossless",
                        "lossless",
                        "lossy-stereo",
                        "spatial",
                    ],
                    name: "Let It Be (2021 Mix)",
                    previews: [
                        {
                            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/ac/c7/d1/acc7d13f-6634-495f-caf6-491eccb505e8/mzaf_3508170422549252893.plus.aac.ep.m4a",
                        },
                    ],
                    artistName: "The Beatles",
                },
            },
        },
    },
];
