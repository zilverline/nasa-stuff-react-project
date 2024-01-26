import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://images-api.nasa.gov/search", () => {
    return HttpResponse.json({
      collection: {
        version: "1.0",
        href: "http://images-api.nasa.gov/search?q=moon",
        items: [
          {
            href: "https://images-assets.nasa.gov/video/NHQ_2019_0311_Go Forward to the Moon/collection.json",
            data: [
              {
                center: "HQ",
                title: "Go Forward to the Moon",
                keywords: ["Moon", "Mars", "Forward to the Moon"],
                nasa_id: "NHQ_2019_0311_Go Forward to the Moon",
                date_created: "2019-03-11T00:00:00Z",
                media_type: "video",
                description:
                  "NASA is going to the Moon and on to Mars, in a measured, sustainable way. Working with U.S. companies and international partners, NASA will push the boundaries of human exploration forward to the Moon. NASA is working to establish a permanent human presence on the Moon within the next decade to uncover new scientific discoveries and lay the foundation for private companies to build a lunar economy.  Right now, NASA is taking steps to begin this next era of exploration. #Moon2Mars  Learn more at: https://www.nasa.gov/moontomars",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/video/NHQ_2019_0311_Go Forward to the Moon/NHQ_2019_0311_Go Forward to the Moon~thumb.jpg",
                rel: "preview",
                render: "image",
              },
              {
                href: "https://images-assets.nasa.gov/video/NHQ_2019_0311_Go Forward to the Moon/NHQ_2019_0311_Go Forward to the Moon.srt",
                rel: "captions",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/video/Artemis Onward to the Moon/collection.json",
            data: [
              {
                center: "HQ",
                date_created: "2024-01-09T00:00:00Z",
                description:
                  "With Artemis missions, NASA will land the first woman and first person of color on the Moon, using innovative technologies to explore more of the lunar surface than ever before. We will collaborate with commercial and international partners and establish the first long-term presence on the Moon. Then, we will use what we learn on and around the Moon to take the next giant leap: sending the first astronauts to Mars.  ",
                keywords: [
                  "NASA",
                  "Artemis",
                  "Moon",
                  "Mars",
                  "Innovative Technologies",
                  "First Person of Color on the Moon",
                  "First Woman on the Moon",
                ],
                media_type: "video",
                nasa_id: "Artemis Onward to the Moon",
                title: "Artemis: Onward to the Moon",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/video/Artemis Onward to the Moon/Artemis Onward to the Moon~thumb.jpg",
                rel: "preview",
                render: "image",
              },
              {
                href: "https://images-assets.nasa.gov/video/Artemis Onward to the Moon/Artemis Onward to the Moon.srt",
                rel: "captions",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/video/NHQ_2018_0131_Super Blue Moon Lunar Eclipse/collection.json",
            data: [
              {
                center: "HQ",
                title: "Super Blue Moon Lunar Eclipse",
                keywords: ["Super Blue Moon", "Lunar Eclipse", "blood moon"],
                nasa_id: "NHQ_2018_0131_Super Blue Moon Lunar Eclipse",
                date_created: "2018-01-31T00:00:00Z",
                media_type: "video",
                description:
                  "NASA TV provided coverage of Super Blue Moon Lunar Eclipse on Jan. 31. The full moon was the third in a series of “supermoons,” when the Moon is closer to Earth in its orbit -- known as perigee -- and about 14 percent brighter than usual. It was also the second full moon of the month, commonly known as a “blue moon.” As the super blue moon passed through Earth’s shadow, viewers in some locations experienced a total lunar eclipse. While in Earth’s shadow, the moon also took on a reddish tint – which is sometimes referred to as a “blood moon.”",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/video/NHQ_2018_0131_Super Blue Moon Lunar Eclipse/NHQ_2018_0131_Super Blue Moon Lunar Eclipse~thumb.jpg",
                rel: "preview",
                render: "image",
              },
              {
                href: "https://images-assets.nasa.gov/video/NHQ_2018_0131_Super Blue Moon Lunar Eclipse/NHQ_2018_0131_Super Blue Moon Lunar Eclipse.srt",
                rel: "captions",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA12235/collection.json",
            data: [
              {
                center: "JPL",
                title: "Nearside of the Moon",
                nasa_id: "PIA12235",
                date_created: "2009-09-24T18:00:22Z",
                keywords: ["Moon", "Chandrayaan-1"],
                media_type: "image",
                description_508: "Nearside of the Moon",
                secondary_creator: "ISRO/NASA/JPL-Caltech/Brown Univ.",
                description: "Nearside of the Moon",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA12235/PIA12235~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/video/NHQ_2020_0914_Observe the moon promo/collection.json",
            data: [
              {
                center: "HQ",
                title: "International Observe the Moon Night - Sept. 26 2020",
                nasa_id: "NHQ_2020_0914_Observe the moon promo",
                media_type: "video",
                keywords: [
                  "Moon",
                  "observe",
                  "enthusiast",
                  "Observe the Moon Night",
                ],
                date_created: "2020-09-14T00:00:00Z",
                description:
                  "On September 26, 2020, Moon enthusiasts and curious people worldwide will come together to celebrate International Observe the Moon Night. Everyone on Earth is invited to learn about lunar science and exploration, take part in celestial observations, and honor cultural and personal connections to the Moon. International Observe the Moon Night occurs annually in September or October, when the Moon is around first quarter ― a great phase for evening observing.   You can join International Observe the Moon Night from wherever you are. Attend or host a virtual or in-person event, or observe the Moon from home. Connect with fellow lunar enthusiasts around the world through our Facebook page, use #ObserveTheMoon on your preferred social media platform, and join the International Observe the Moon Night Flickr group.   Learn more and find program resources on moon.nasa.gov/observe.",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/video/NHQ_2020_0914_Observe the moon promo/NHQ_2020_0914_Observe the moon promo~thumb.jpg",
                rel: "preview",
                render: "image",
              },
              {
                href: "https://images-assets.nasa.gov/video/NHQ_2020_0914_Observe the moon promo/NHQ_2020_0914_Observe the moon promo.srt",
                rel: "captions",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/video/Orion_Artemis-I_b-roll_9_2021_FS/collection.json",
            data: [
              {
                description:
                  "Animation showing Orion's journey to the Moon on Artemis I - full screen version.  Artemis I will be the first integrated flight test of NASA’s deep space exploration system: the Orion spacecraft, Space Launch System (SLS) rocket and the ground systems at Kennedy Space Center in Cape Canaveral, Florida. During this flight, the uncrewed Orion spacecraft will launch on the most powerful rocket in the world and travel thousands of miles beyond the Moon, farther than any spacecraft built for humans has ever flown, over the course of about a three-week mission.",
                title: "Orion_Artemis-I_animation_b-roll_9_2021_FS",
                location: "Moon",
                nasa_id: "Orion_Artemis-I_b-roll_9_2021_FS",
                media_type: "video",
                keywords: ["Orion", "Artemis", "Animation", "Moon"],
                date_created: "2021-09-15T00:00:00Z",
                description_508:
                  "Orion Artemis I animation b-roll - full screen",
                secondary_creator: "NASA / Liam Yanulis",
                center: "JSC",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/video/Orion_Artemis-I_b-roll_9_2021_FS/Orion_Artemis-I_b-roll_9_2021_FS~thumb.jpg",
                rel: "preview",
                render: "image",
              },
              {
                href: "https://images-assets.nasa.gov/video/Orion_Artemis-I_b-roll_9_2021_FS/Orion_Artemis-I_b-roll_9_2021_FS.srt",
                rel: "captions",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA13517/collection.json",
            data: [
              {
                center: "JPL",
                title: "Color of the Moon",
                nasa_id: "PIA13517",
                date_created: "2010-09-10T22:24:40Z",
                keywords: ["Moon", "Lunar Reconnaissance Orbiter LRO"],
                media_type: "image",
                description_508: "Color of the Moon",
                secondary_creator: "NASA/GSFC/Arizona State University",
                description: "Color of the Moon",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA13517/PIA13517~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/video/Moon and Saturn/collection.json",
            data: [
              {
                center: "JSC",
                date_created: "2022-11-19T00:00:00Z",
                description:
                  "art001m1013232148 (Nov. 19, 2022) On flight day 4, Orion caught this view of our Moon juxtaposed with Saturn toward the upper left of the frame by using one of the cameras mounted on its solar arrays.",
                keywords: [
                  "Artemis I resource reel",
                  "Artemis",
                  "Artemis I",
                  "Orion",
                  "Moon",
                  "Saturn",
                ],
                media_type: "video",
                nasa_id: "Moon and Saturn",
                title: "Orion Sees the Moon and Saturn",
                album: ["Artemis_I"],
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~thumb.jpg",
                rel: "preview",
                render: "image",
              },
              {
                href: "https://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn.srt",
                rel: "captions",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/video/NHQ_2018_0126_Jan. 31, 2018 Super Blue Blood Moon/collection.json",
            data: [
              {
                center: "HQ",
                title: "Jan. 31, 2018 Super Blue Blood Moon",
                keywords: ["Super Blue Blood Moon", "supermoons", "blood moon"],
                nasa_id: "NHQ_2018_0126_Jan. 31, 2018 Super Blue Blood Moon",
                date_created: "2018-01-26T00:00:00Z",
                media_type: "video",
                description:
                  "January 31 brings a lunar trifecta: the Super Blue Blood Moon! NASA TV will offer a livestream starting at 5:30 a.m. This full moon is the third in a series of “supermoons,” when the Moon is closer to Earth in its orbit -- known as perigee -- and about 14 percent brighter than usual. It’s the second full moon of the month, commonly known as a “blue moon.” The super blue moon will pass through Earth’s shadow to give viewers in the right location a total lunar eclipse. While the Moon is in the Earth’s shadow it will take on a reddish tint, known as a “blood moon.”  More: https://www.nasa.gov/feature/super-blue-blood-moon-coming-jan-31  Credit: NASA 360",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/video/NHQ_2018_0126_Jan. 31, 2018 Super Blue Blood Moon/NHQ_2018_0126_Jan. 31, 2018 Super Blue Blood Moon~thumb.jpg",
                rel: "preview",
                render: "image",
              },
              {
                href: "https://images-assets.nasa.gov/video/NHQ_2018_0126_Jan. 31, 2018 Super Blue Blood Moon/NHQ_2018_0126_Jan. 31, 2018 Super Blue Blood Moon.srt",
                rel: "captions",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA12233/collection.json",
            data: [
              {
                center: "JPL",
                title: "Mapping the Moon, Point by Point",
                keywords: ["Moon", "Chandrayaan-1"],
                nasa_id: "PIA12233",
                date_created: "2009-09-24T18:00:20Z",
                media_type: "image",
                description_508: "Mapping the Moon, Point by Point",
                secondary_creator: "NASA/JPL-Caltech",
                description: "Mapping the Moon, Point by Point",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA12233/PIA12233~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA12229/collection.json",
            data: [
              {
                center: "JPL",
                title: "Mineral Mapping the Moon",
                nasa_id: "PIA12229",
                date_created: "2009-09-24T18:00:16Z",
                keywords: ["Moon", "Chandrayaan-1"],
                media_type: "image",
                description_508: "Mineral Mapping the Moon",
                secondary_creator: "ISRO/NASA/JPL-Caltech/Brown Univ.",
                description: "Mineral Mapping the Moon",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA12229/PIA12229~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA12228/collection.json",
            data: [
              {
                center: "JPL",
                title: "Cassini Look at Water on the Moon",
                nasa_id: "PIA12228",
                date_created: "2009-09-24T18:00:15Z",
                keywords: ["Moon", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Cassini Look at Water on the Moon",
                secondary_creator: "NASA/JPL-Caltech/USGS",
                description: "Cassini Look at Water on the Moon",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA12228/PIA12228~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA14208/collection.json",
            data: [
              {
                center: "JPL",
                title: "That No Moon...",
                keywords: ["Mercury", "MESSENGER"],
                nasa_id: "PIA14208",
                date_created: "2011-04-26T15:00:01Z",
                media_type: "image",
                description_508: "That No Moon...",
                secondary_creator:
                  "NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington",
                description: "That No Moon...",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA14208/PIA14208~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA13642/collection.json",
            data: [
              {
                center: "JPL",
                title: "Highest Point on the Moon",
                nasa_id: "PIA13642",
                date_created: "2010-10-26T22:24:50Z",
                keywords: ["Moon", "Lunar Reconnaissance Orbiter LRO"],
                media_type: "image",
                description_508: "Highest Point on the Moon",
                secondary_creator: "NASA/GSFC/Arizona State University",
                description: "Highest Point on the Moon",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA13642/PIA13642~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA13516/collection.json",
            data: [
              {
                center: "JPL",
                title: "Moon seen from the East",
                nasa_id: "PIA13516",
                date_created: "2010-09-08T22:24:40Z",
                keywords: ["Moon", "Lunar Reconnaissance Orbiter LRO"],
                media_type: "image",
                description_508: "Moon seen from the East",
                secondary_creator: "NASA/GSFC/Arizona State University",
                description: "Moon seen from the East",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA13516/PIA13516~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA13227/collection.json",
            data: [
              {
                center: "JPL",
                title: "The Earth from the Moon",
                keywords: ["Moon", "Lunar Reconnaissance Orbiter LRO"],
                nasa_id: "PIA13227",
                date_created: "2010-06-24T17:56:02Z",
                media_type: "image",
                description_508: "The Earth from the Moon",
                secondary_creator: "NASA/GSFC/Arizona State University",
                description: "The Earth from the Moon",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA13227/PIA13227~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA13515/collection.json",
            data: [
              {
                center: "JPL",
                title: "Natural Bridge on the Moon",
                nasa_id: "PIA13515",
                date_created: "2010-09-07T22:24:40Z",
                keywords: ["Moon", "Lunar Reconnaissance Orbiter LRO"],
                media_type: "image",
                description_508: "Natural Bridge on the Moon",
                secondary_creator: "NASA/GSFC/Arizona State University",
                description: "Natural Bridge on the Moon",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA13515/PIA13515~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA13998/collection.json",
            data: [
              {
                center: "JPL",
                title: "Challenger Astronauts Memorialized on the Moon",
                nasa_id: "PIA13998",
                date_created: "2011-01-29T07:00:24Z",
                keywords: ["Moon", "Lunar Reconnaissance Orbiter LRO"],
                media_type: "image",
                description_508:
                  "Challenger Astronauts Memorialized on the Moon",
                secondary_creator: "NASA/GSFC/Arizona State University",
                description: "Challenger Astronauts Memorialized on the Moon",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA13998/PIA13998~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA13496/collection.json",
            data: [
              {
                center: "JPL",
                title: "The Moon Largest Impact Basin",
                nasa_id: "PIA13496",
                date_created: "2010-07-13T22:24:40Z",
                keywords: ["Moon", "Lunar Reconnaissance Orbiter LRO"],
                media_type: "image",
                description_508: "The Moon Largest Impact Basin",
                secondary_creator: "NASA/GSFC/Arizona State University",
                description: "The Moon Largest Impact Basin",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA13496/PIA13496~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/video/NHQ_2018_0508_Administrator Bridenstine - We Are Going the Moon/collection.json",
            data: [
              {
                center: "HQ",
                title: "Administrator Bridenstine: ‘We Are Going to the Moon’",
                keywords: [
                  "Jim Bridenstine",
                  "commercial companies",
                  "industry day",
                  "Moon",
                ],
                nasa_id:
                  "NHQ_2018_0508_Administrator Bridenstine - We Are Going the Moon",
                date_created: "2018-05-08T00:00:00Z",
                media_type: "video",
                description:
                  "NASA Administrator Jim Bridenstine asked commercial companies to help get the agency back to the Moon as quickly as possible during an ‘industry day', Tuesday, May 8, 2018 held at NASA Headquarters in Washington.  NASA is calling for commercial proposals for delivering instruments, experiments, and other small payloads to the surface of the Moon as early as next year. This solicitation is part of a broader Exploration Campaign that will pave the way for a human return to the Moon.",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/video/NHQ_2018_0508_Administrator Bridenstine - We Are Going the Moon/NHQ_2018_0508_Administrator Bridenstine - We Are Going the Moon~thumb.jpg",
                rel: "preview",
                render: "image",
              },
              {
                href: "https://images-assets.nasa.gov/video/NHQ_2018_0508_Administrator Bridenstine - We Are Going the Moon/NHQ_2018_0508_Administrator Bridenstine - We Are Going the Moon.srt",
                rel: "captions",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/video/Moon Below Orion art001m1013251756/collection.json",
            data: [
              {
                center: "JSC",
                date_created: "2022-11-21T00:00:00Z",
                description:
                  "art001m1013251756 (Nov. 21, 2022) The Moon is seen below Orion on flight day 6 of the 25.5-day Artemis I mission. On this day, Orion completed the outbound powered flyby, passing just 81 miles above the Moon.",
                keywords: [
                  "Artemis I resource reel",
                  "Artemis",
                  "Artemis I",
                  "Moon",
                  "Orion",
                ],
                media_type: "video",
                nasa_id: "Moon Below Orion art001m1013251756",
                title: "Flight Day 6: Orion Focuses on Moon",
                album: ["Artemis_I"],
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/video/Moon Below Orion art001m1013251756/Moon Below Orion art001m1013251756~thumb.jpg",
                rel: "preview",
                render: "image",
              },
              {
                href: "https://images-assets.nasa.gov/video/Moon Below Orion art001m1013251756/Moon Below Orion art001m1013251756.srt",
                rel: "captions",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/video/NASA Explores the Moon and Beyond/collection.json",
            data: [
              {
                center: "HQ",
                title: "NASA Explores the Moon and Beyond",
                nasa_id: "NASA Explores the Moon and Beyond",
                media_type: "video",
                keywords: [
                  "NASA",
                  "Moon",
                  "Mars",
                  "Red Planet",
                  "Artemis",
                  "Robotic and Human Exploration",
                  "First woman of color on lunar surface",
                  "First woman on lunar surface",
                  "State of NASA",
                ],
                date_created: "2022-03-28T00:00:00Z",
                description:
                  "NASA continues to forge ahead in humanity’s quest for knowledge as we explore the Moon and Mars. Through Artemis, we will expand our robotic and human exploration of the Moon and land the first woman and the first person of color on the lunar surface. As we get ready to venture beyond, the technology we develop and discoveries we make on the Moon will prepare us for Mars and our next giant leap: sending humans to the Red Planet. Learn more atnasa.gov/moontomars",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/video/NASA Explores the Moon and Beyond/NASA Explores the Moon and Beyond~thumb.jpg",
                rel: "preview",
                render: "image",
              },
              {
                href: "https://images-assets.nasa.gov/video/NASA Explores the Moon and Beyond/NASA Explores the Moon and Beyond.srt",
                rel: "captions",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA00404/collection.json",
            data: [
              {
                center: "JPL",
                title: "Moon - North Polar Mosaic, Color",
                nasa_id: "PIA00404",
                date_created: "1998-06-08T15:11:30Z",
                keywords: ["Moon", "Galileo"],
                media_type: "image",
                description_508: "Moon - North Polar Mosaic, Color",
                secondary_creator: "NASA/JPL/USGS",
                description:
                  "Moon - North Polar Mosaic, Color  http://photojournal.jpl.nasa.gov/catalog/PIA00404",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA00404/PIA00404~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA16621/collection.json",
            data: [
              {
                center: "JPL",
                title: "Map of Moon Crust",
                nasa_id: "PIA16621",
                date_created: "2012-12-05T17:00:14Z",
                keywords: [
                  "Moon",
                  "Gravity Recovery and Interior Laboratory GRAIL",
                ],
                media_type: "image",
                description_508: "Map of Moon Crust",
                secondary_creator: "NASA/JPL-Caltech/MIT/GSFC",
                description: "Map of Moon Crust",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA16621/PIA16621~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA14114/collection.json",
            data: [
              {
                center: "JPL",
                title: "The Moon as seen by MESSENGER",
                nasa_id: "PIA14114",
                date_created: "2011-03-18T21:23:10Z",
                keywords: [
                  "Moon",
                  "Lunar Reconnaissance Orbiter LRO,MESSENGER",
                ],
                media_type: "image",
                description_508: "The Moon as seen by MESSENGER",
                secondary_creator:
                  "NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington",
                description: "The Moon as seen by MESSENGER",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA14114/PIA14114~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA16622/collection.json",
            data: [
              {
                center: "JPL",
                title: "GRAIL Gravity Tour of the Moon",
                keywords: [
                  "Moon",
                  "Gravity Recovery and Interior Laboratory GRAIL",
                ],
                nasa_id: "PIA16622",
                date_created: "2012-12-05T17:00:15Z",
                media_type: "image",
                description_508: "GRAIL Gravity Tour of the Moon",
                secondary_creator: "NASA/JPL-Caltech/MIT/GSFC",
                description: "GRAIL Gravity Tour of the Moon",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA16622/PIA16622~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA02442/collection.json",
            data: [
              {
                center: "JPL",
                title: "Moon North Pole",
                nasa_id: "PIA02442",
                date_created: "1999-12-21T19:52:23Z",
                keywords: ["Moon", "Mariner Venus Mercury Mariner 10"],
                media_type: "image",
                description_508: "Moon North Pole",
                secondary_creator: "NASA/JPL/Northwestern University",
                description: "Moon North Pole",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA02442/PIA02442~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/video/FD 19 Moon/collection.json",
            data: [
              {
                center: "JSC",
                date_created: "2022-12-04T00:00:00Z",
                description:
                  "art001m1203372310 (Dec. 4, 2022) Orion captured this video of the Moon from a camera mounted on one of its solar arrays on the 19th day of the Artemis I mission. The spacecraft was over 220,000 miles away from Earth, and over 20,000 miles from the Moon.",
                keywords: [
                  "Artemis I resource reel",
                  "Artemis",
                  "Artemis I",
                  "Orion",
                  "Moon",
                ],
                media_type: "video",
                nasa_id: "FD 19 Moon",
                title: "Flight Day 19: Sights Set on the Moon",
                album: ["Artemis_I"],
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/video/FD 19 Moon/FD 19 Moon~thumb.jpg",
                rel: "preview",
                render: "image",
              },
              {
                href: "https://images-assets.nasa.gov/video/FD 19 Moon/FD 19 Moon.srt",
                rel: "captions",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/video/Apollo_11_Introduction_720p/collection.json",
            data: [
              {
                description:
                  "This montage video shows highlights from the Apollo 11 mission, from liftoff in Florida to departure from the Moon.",
                title: "Apollo_11_Introduction_720p",
                photographer: "NASA",
                location: "Earth's Moon",
                nasa_id: "Apollo_11_Introduction_720p",
                media_type: "video",
                keywords: [
                  "Apollo 11",
                  "Moon",
                  "Earth's Moon",
                  "Neil Armstrong",
                  "Buzz Aldrin",
                  "Apollo",
                  "Apollo Program",
                ],
                date_created: "2017-08-03T00:00:00Z",
                description_508:
                  "This montage video shows highlights from the Apollo 11 mission, from liftoff in Florida to departure from the Moon.",
                center: "HQ",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/video/Apollo_11_Introduction_720p/Apollo_11_Introduction_720p~thumb.jpg",
                rel: "preview",
                render: "image",
              },
              {
                href: "https://images-assets.nasa.gov/video/Apollo_11_Introduction_720p/Apollo_11_Introduction_720p.srt",
                rel: "captions",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/video/NHQ_2020_0127_AskNASA┃ How Will Astronauts Dig on the Moon/collection.json",
            data: [
              {
                center: "HQ",
                title: "#AskNASA┃ How Will Astronauts Dig on the Moon",
                nasa_id:
                  "NHQ_2020_0127_AskNASA┃ How Will Astronauts Dig on the Moon",
                date_created: "2020-01-26T00:00:00Z",
                keywords: [
                  "AskNASA",
                  "Jacob Bleacher",
                  "Chief Exploration Scientist",
                  "Moon Rocks",
                ],
                media_type: "video",
                description:
                  "How will we uncover the history of the Moon? What tools and instruments will help us dig deeper? The latest episode of #AskNASA will answer these questions and more.  NASA’s Chief Exploration Scientist Jacob Bleacher demonstrates exactly how craters help us understand the history of Moon rocks and the Moon’s surface.  As part of the Artemis program, Jacob highlights the import role astronauts play in finding and analyzing samples. Jacob also explains how field work on Earth support both science and human exploration.",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/video/NHQ_2020_0127_AskNASA┃ How Will Astronauts Dig on the Moon/NHQ_2020_0127_AskNASA┃ How Will Astronauts Dig on the Moon~thumb.jpg",
                rel: "preview",
                render: "image",
              },
              {
                href: "https://images-assets.nasa.gov/video/NHQ_2020_0127_AskNASA┃ How Will Astronauts Dig on the Moon/NHQ_2020_0127_AskNASA┃ How Will Astronauts Dig on the Moon.srt",
                rel: "captions",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/video/NHQ_2019_0930_AskNASA - Why Are We Going to the Moon/collection.json",
            data: [
              {
                description:
                  "NASA Chief Scientist Jim Green answers the question “Why are we going to the Moon?” Comment on this video using #AskNASA with your questions for upcoming episodes! He addresses key questions about our plans to explore the Moon and Mars, including where we will most likely find water on the Moon. Jim shares his extensive background in Planetary Science to explain the significance of returning with international and commercial partners. Jim also highlights how we are currently exploring Mars with the Curiosity rover.",
                title: "#AskNASA - Why Are We Going to the Moon?",
                keywords: [
                  "AskNASA",
                  "Jim Green",
                  "Green",
                  "NASA Chief Scientist",
                  "Moon",
                  "Mars",
                ],
                nasa_id: "NHQ_2019_0930_AskNASA - Why Are We Going to the Moon",
                date_created: "2019-09-30T00:00:00Z",
                media_type: "video",
                center: "HQ",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/video/NHQ_2019_0930_AskNASA - Why Are We Going to the Moon/NHQ_2019_0930_AskNASA - Why Are We Going to the Moon~thumb.jpg",
                rel: "preview",
                render: "image",
              },
              {
                href: "https://images-assets.nasa.gov/video/NHQ_2019_0930_AskNASA - Why Are We Going to the Moon/NHQ_2019_0930_AskNASA - Why Are We Going to the Moon.srt",
                rel: "captions",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA00231/collection.json",
            data: [
              {
                center: "JPL",
                title: "Moon As Seen By NIMS",
                nasa_id: "PIA00231",
                date_created: "1996-02-08T12:58:43Z",
                keywords: ["Moon", "Galileo"],
                media_type: "image",
                description_508:
                  "These four images of the Moon are from data acquired by NASA Galileo spacecraft Near-Earth Mapping Spectrometer during Galileo December 1992 Earth/Moon flyby.",
                secondary_creator: "NASA/JPL",
                description:
                  "These four images of the Moon are from data acquired by NASA Galileo spacecraft Near-Earth Mapping Spectrometer during Galileo December 1992 Earth/Moon flyby.  http://photojournal.jpl.nasa.gov/catalog/PIA00231",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA00231/PIA00231~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA00126/collection.json",
            data: [
              {
                center: "JPL",
                title: "Moon - North Pole",
                nasa_id: "PIA00126",
                date_created: "1996-01-29T11:13:36Z",
                keywords: ["Moon", "Galileo"],
                media_type: "image",
                description_508:
                  "This view of the north polar region of the Moon was obtained by NASA Galileo camera during the spacecraft flyby of the Earth-Moon system on December 7 and 8, 1992.",
                secondary_creator: "NASA/JPL",
                description:
                  "This view of the north polar region of the Moon was obtained by NASA's Galileo camera during the spacecraft flyby of the Earth-Moon system on December 7 and 8, 1992.  http://photojournal.jpl.nasa.gov/catalog/PIA00126",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA00126/PIA00126~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/video/Where Are the Moon Rocks_ - Horizontal Video/collection.json",
            data: [
              {
                center: "HQ",
                date_created: "2023-08-22T00:00:00Z",
                description:
                  "Where are the Moon rocks? When they’re not being studied by institutions or enjoyed by museumgoers, NASA has a specialized Lunar Sample Curation Laboratory at NASA’s Johnson Space Center to store and keep these otherworldly samples safe. Deputy Apollo Sample Curator Dr. Juliane Gross explains more about lunar sample curation.",
                keywords: [
                  "Moon",
                  "Moon Rocks",
                  "Artemis",
                  "Lunar Sample Curation Laboratory",
                ],
                media_type: "video",
                nasa_id: "Where Are the Moon Rocks_ - Horizontal Video",
                title: "Where Are the Moon Rocks? We Asked A NASA Expert",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/video/Where Are the Moon Rocks_ - Horizontal Video/Where Are the Moon Rocks_ - Horizontal Video~thumb.jpg",
                rel: "preview",
                render: "image",
              },
              {
                href: "https://images-assets.nasa.gov/video/Where Are the Moon Rocks_ - Horizontal Video/Where Are the Moon Rocks_ - Horizontal Video.srt",
                rel: "captions",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA00129/collection.json",
            data: [
              {
                center: "JPL",
                title: "Moon - False Color Mosaic",
                nasa_id: "PIA00129",
                date_created: "1996-01-29T14:46:58Z",
                keywords: ["Moon", "Galileo"],
                media_type: "image",
                description_508:
                  "This false-color mosaic of part of the Moon was constructed from 54 images taken by the imaging system aboard NASA Galileo as the spacecraft flew past the Moon on December 7, 1992.",
                secondary_creator: "NASA/JPL",
                description:
                  "This false-color mosaic of part of the Moon was constructed from 54 images taken by the imaging system aboard NASA's Galileo as the spacecraft flew past the Moon on December 7, 1992.  http://photojournal.jpl.nasa.gov/catalog/PIA00129",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA00129/PIA00129~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA00132/collection.json",
            data: [
              {
                center: "JPL",
                title: "Moon - False Color Mosaic",
                nasa_id: "PIA00132",
                date_created: "1996-01-29T14:48:40Z",
                keywords: ["Moon", "Galileo"],
                media_type: "image",
                description_508:
                  "This false-color photograph is a composite of 15 images of the Moon taken through three color filters NASA Galileo solid-state imaging system during the spacecraft passage through the Earth-Moon system on December 8, 1992.",
                secondary_creator: "NASA/JPL",
                description:
                  "This false-color photograph is a composite of 15 images of the Moon taken through three color filters NASA's Galileo solid-state imaging system during the spacecraft passage through the Earth-Moon system on December 8, 1992.  http://photojournal.jpl.nasa.gov/catalog/PIA00132",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA00132/PIA00132~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/audio/Ep114_Value of the Moon/collection.json",
            data: [
              {
                description:
                  "Pat Ryan (Host): Houston, We Have a Podcast. Welcome to the official podcast of the NASA Johnson Space Center. This is Episode 114: “The Value of the Moon”. I'm Pat Ryan. On this podcast we talk with scientists, engineers, astronauts and other folks about their part in America's space exploration program. And today we're going to talk about the target of a lot of our current efforts: the Moon. NASA's Artemis program is focused on returning American astronauts to the Moon by 2024 through the use of the Space Launch System rocket, the Orion Spacecraft, the Gateway Lunar Outpost and a new lunar lander. And to do so in a sustainable way, that is to go to the Moon to stay, to learn how to support astronauts in that environment and in the process get ourselves ready to go on from there to Mars. As a part of that mission, we mean to make the best use of the natural resources on the Moon, and that's very different than what the Apollo program set out to do 50 years ago. It also prompts an echo of President Kennedy's question: why the Moon? Well today we're going to start scratching the surface of answering that question by talking to the self-described cheerleader-in-chief for the Moon. Dr. Samuel Lawrence is a planetary scientist in the Astromaterials Research and Exploration Science Division here at the Johnson Space Center in Houston. And he is the lead lunar exploration scientist at JSC. His research is focused on using petrology which is the study of rocks and the conditions under which they form. I know because I looked it up. His research is focused on using petrology and remote sensing to investigate the composition, origin and evolution of planetary surfaces. He's been heavily involved in the development and testing and the science operations of the Lunar Reconnaissance Orbiter which is now ten years into studying the Moon up close. He is also busy in Project Artemis in the formulation of science objectives and operations for the next generation of exploration on the Moon. As they say, “we are going.” And today we talk about what we hope to do and to learn when we get there. Okay then. Here we go.  [ Music ]  Host: Let me start by helping to introduce the audience to who you are. Where does your interest in the Moon come from? Does it come out of the Apollo missions from 50 years ago or some other aspect of astronomy or geology?  Samuel Lawrence: Well, that's a very good question. Back when I started into graduate school in the 2000's, discovery of the potential microfossils in Meteorite ALH84001 was in the news and so like many people I actually went to graduate school to do Mars work.  Host: Yeah.  Samuel Lawrence: Mars. But I've always been interested in lunar exploration. Starting when I was a kid growing up, we had the space shuttle, had just started to fly. That's the reason why I'm here, and one of my earliest memories is watching Columbia launch on her first flight as STS-1. And so that's very inspirational. It has an effect on people. And keep in mind the space shuttle wasn't just -- at the time it was first launching, it was the tool that was going to open up the space frontier to the human species and we were all going to get a chance to ride in the space shuttle.  Host: You were going to go there, back and forth all the time.  Samuel Lawrence: We were going to go, yeah. I had a pamphlet that was put into a lot of Cheerios boxes when Columbia's first flights were going on. It was like, \"You will ride to work one day on a space shuttle.\" And you read that stuff and it does have an impact on you. And I think that actually did pull in a lot of young people in the early 1980's into the science, technology, engineering and math fields. So it does have, you know -- the space program does have a demonstrable impact on what young people choose to do with their careers. But again, during the 80's it was sort of assumed that we would all be -- you know, the 21st century was right around the corner. We would have moon bases and people on Mars. And the first President Bush hopped up there in 1988 and says, \"We're going to back to the Moon to stay and then on to Mars.\"  Host: Right.  Samuel Lawrence: And so like most people, like most fourth-graders, when the president hops up there and says that, you might reasonably expect it's going to happen. And it's really kind of a shame it really didn't turn out the way we had been told. That is truly unfortunate because it does indicate something about our ability to make and follow long-term plans as a culture and as a society. But anyway, to answer your actual question, I'd always figured I would go to college to be an aerospace engineer. But I read -- you know, growing up in the 90's, you know, there was a lot of backing and forthing. And I read some op-eds by a guy named Paul Spudis and I was like, \"Wow, this makes really good sense.\" And so I was very excited about aerospace. I was going to go to college to be aerospace. And then I read a book by the legendary lunar geologist Don Wilhelms who did a lot of work during Apollo. And it was very interesting and I had this very epiphany that if you're really going to do space in the 21st century, then understanding where the resources are to enable human exploration is going to be a really important question.  Host: And you're talking about the resources that are out there in space.  Samuel Lawrence: Out there in space, that's right. Yes.  Host: Yeah.  Samuel Lawrence: And so I changed course slightly and became a geologist. And you know, geology's a very interesting field. It's very integrated. Any given day you might have to understand biology and physics and thermodynamics and chemistry in order to understand the history of rocks and how it worked on this planet. And in the book that Don Wilhelms wrote, “To a Rocky Moon,” he made the really cogent point that up until the space age, the Moon had been an object of fascination for astronomers. But the space program and the space race converted it into an object we could explore and understand using principles of terrestrial geology to understand how the Moon worked. And the great gift of Apollo was that it essentially opened up our understanding of the entire solar system and the universe around us in a way we could understand. And so when I went to college, I went -- or when I went to graduate school rather to get my doctorate in planetary science, I originally did it to do Mars work. And then I met -- and then I just sort of realized there was a lot of interesting stuff to be done on the Moon. And everyone else was doing Mars work, so I figured, I might as well just switch over to moon work and then I'll have less competition.  Host: Yeah.  Samuel Lawrence: Which proved to be an interesting choice.  Host: Have you been at NASA for your whole career?  Samuel Lawrence: No. No. I was hired three -- I was on the research faculty at Arizona State University and I was hired at Johnson Space Center three years ago specifically to shore up their lunar expertise in anticipation of a new program of lunar exploration.  Host: I read an article in getting ready for today that quoted you as saying the “Moon is the Rosetta Stone for the whole solar system.’’  Samuel Lawrence: That's actually true.  Host: That's pretty high praise.  Samuel Lawrence: Yeah.  Host: Tell me why you think that? What is it that we can learn studying the Moon that teaches us about the rest of the solar system?  Samuel Lawrence: Well, that is a very good question. So in general, when we went to the Moon the first time, we didn't really understand -- there were still major questions in the 60's about where did the Moon come from? There are these features on the lunar surface that look very much like rivers. And so there were people, serious scientists making serious suggestions there might have been liquid water on the Moon at one point. They look just like rivers. So they must be.  Host: Well if it's the evidence of your eyes and it's the only evidence you have.  Samuel Lawrence: That's right. That's right. So then we went to the Moon and we discovered, as I sort of alluded to previously, that the Moon gave us this insight into planetary processes, the way geology works in other planets. And one of the reasons -- so we actually landed on one of things that looks like a river.  Host: Right.  Samuel Lawrence: And discovered it was actually a lava channel and the Moon had never had liquid water on its surface and that the Moon was not just an asteroid that had been captured in lunar orbit. But we discovered that it was very similar to a rocky planet. It had a crust, a mantel and a core and it had very likely been created by a Mars-size impactor hitting the primordial earth and then the materials thrown off by that impact aggregated in low Earth orbit and differentiated into the Moon.  Host: It's formerly a piece of this planet.  Samuel Lawrence: Right. Which explains why the chemistries of the two bodies are so similar in some respects. They're very different in others. But in some respects they are actually pretty similar. And so but the biggest reason why I say that Moon is the Rosetta Stone of the solar system is we landed with astronauts who did field work in key locations on the lunar surface. From that field work -- they picked up samples, they did geology in the field, they selected -- they carefully selected samples, well more carefully in some cases than others. But they selected samples that were tied back to specific locations on the lunar surface. And from that we brought it back here to Houston and then distributed those samples all over the world and did radiometric age dating, figured out how old the samples were. And very similarly to -- you know when you cut down a tree you count the number of rings?  Host: Right.  Samuel Lawrence: And that tells you how old the tree is. Well, on another planet, especially ones that don't have atmospheres, it's the number of craters that tells you -- they can be used to infer how old the surface is. The more craters there are, the older the surface is.  Host: The longer it's been there exposed to passing asteroids.  Samuel Lawrence: That's right. That's right. And so there are always exceptions to every rule and that's sort of a gross oversimplification of it. But in general that rule holds. The older the surface, the more craters there are. So what you could do is you could count the areas near the Apollo landing sites, see how many craters are on those areas and then figure out because we have samples, the radiometric age dates, you know, see how old they were. And then that time scale has actually been extended to every single one of the inner terrestrial planets. Mercury, Mars, Vesta. And it really is this gift that has kept on giving. You can make a pretty good case in a sense it is actually what happened that most of the discoveries we've made in planetary science for the past five decades are directly or indirectly related to the discoveries made by the Apollo astronauts on the surface of the Moon. That was landing in six locations for only a few days at a time.  Host: Right.  Samuel Lawrence: For over a two-year period. So imagine what's going to happen when we go back to stay. I cannot predict it. That's why you explore, right? But in general we do really need to go back to the Moon and get more samples and understand the radiometric age dates of other locations on the Moon. Because it sort of turned out that the Apollo -- the six Apollo landing sites and the Soviet landing sites were all actually in a very narrow band along the equator of the Moon and they're not actually truly representative of the Moon as a whole.  Host: Not distributed across, around the whole body.  Samuel Lawrence: That's right. Yeah. So we do actually need to go back and get more samples and understand when things happened on the Moon. And that will actually help us to understand when things happened in all the other terrestrial planets too. So that's one of the key objectives for what we're going to do for future lunar missions as well.  Host: I must ask for everyone like me that doesn't know precisely what radiometric dating is.  Samuel Lawrence: Well, there are certain isotopes that decay over time. If you've -- I guess it's -- for those of us who grew up during the Cold War, it's probably an easier story to tell than others. But basically when a rock is erupted and forms onto a planetary body, it has certain elements that degrade naturally over time, radioactive decay. You can measure the abundances. And the way the decay rates are known. They've been measured in laboratories. You can measure the amount of these radionuclides in a rock and figure out based on what the abundances are how old the rock is.  Host: How long it's been deteriorating.  Samuel Lawrence: Yeah, that's right. How long the radioelements have been decaying over time. And then do math and figure it out.  Host: See, the math part is the hard part that keeps --  Samuel Lawrence: That's actually the easy part. It's the measurement that's the hard part, but sure.  Host: You've started to touch on some of the importance of the science of what we can learn at the Moon. We learned about the age of the planets from the Moon. How do you characterize generally -- and then we'll get more specific -- about the value of the science that we can get from going to the Moon?  Samuel Lawrence: Oh, it's immense. And the value you get from sending human explorers is going to be even larger. I think one of the key points I like to make which I sort of already have made is that we only landed on the Moon with human beings six times. And they only explored a very small, vanishingly small area of the lunar surface. And they had intense schedule pressure, intense time pressure. And you'll always have that in spaceflight. But if you're going back and our paradigm this time around is different. We're not going on camping trips. We're going to stay. And that means we're going to -- if you've listened -- so right now at NASA our focus right now is the 2024 landing, the Artemis III mission. But beyond, yeah, what comes after that, we're still working on it. It's still in development.  Host: Right.  Samuel Lawrence: But the Space Council and the Vice President and the administrator have all been very clear we're going this time to stay and that requires a paradigm shift. It's not a camping expedition. We're going to go back and establish some sort of permanent presence on the lunar surface. And hopefully enable sustainable exploration in a way that doesn't -- you know, Apollo was fantastic but Apollo got cancelled and we don't want to have that happen again.  Host: And Apollo wasn't meant to go there to stay. Those missions were meant to go there for those short periods of time and come home.  Samuel Lawrence: That's right.  Host: It's not like it was their fault. But now we're doing something different.  Samuel Lawrence: That's right.  Host: We're going there to stay there to learn more about the place and to learn how we can stay there for a long time.  Samuel Lawrence: That's right.  Host: Long periods of time.  Samuel Lawrence: That's right.  Host: Are there certain aspects that you think of lunar science, if that's the right phrase to use, that are more valuable? What are the more valuable areas of science that we can learn about?  Samuel Lawrence: Well, I think there's a lot. Obviously there's -- in terms of understanding fundamental processes in the solar system, you know, the impact process. It affects every single planet in the solar system, not just the Moon. It affects Earth. That's why we're having this conversation, not, you know, some dinosaur radio show or something, right? I mean, that's why we're here.  Host: Right.  Samuel Lawrence: So the impact process is fundamental. Understanding what exposure to the space environment does to a surface. Understanding the physics of how light interacts with the surface to understand how do you use remote sensing techniques to interpret mineralogy and composition. All of these are fundamental processes across the solar system, and the Moon is a natural laboratory for them. The Moon also records the first billion years of the history of the Earth/Moon system. So on earth we have plate tectonics and that tends to recycle, you know, the continents. You know, materials from the earliest part of earth when one-celled organisms were starting to crawl out from under the ground and get onto the surface and start the long evolutionary path that resulted in us -- that's all gone. We don't have that record on this planet anymore.  Host: Because it shuffled up the evidence.  Samuel Lawrence: Yes. Well, evidence was destroyed by plate tectonics.  Host: Right.  Samuel Lawrence: But that evidence is there on the Moon. The Moon actually does record because it's the Earth/Moon system. It does -- the first billion years is available and can be found on the Moon. It's not saying you can say, \"Well, we're going to go to this spot and find it.\" But with a long-term presence on the lunar surface and lots of astronaut field work, you will find it eventually.  Host: Because there aren't plates and tectonics on the Moon.  Samuel Lawrence: That's right. There's no plates. There's no tectonics. There's no recycling. You know, you will find it on the Moon and that's very interesting. That will tell us a lot about the rise -- you know, we're always talking about how to find life in the solar system, but how life evolved on Earth is a very, very important question for us. And a key part of that story is told on the Moon and only accessible there.  Host: It's not just the lack of plate tectonics. The Moon doesn't have weather or other things.  Samuel Lawrence: That's right.  Host: Or other things that would disturb the evidence of these ancient events.  Samuel Lawrence: That's right, yeah.  Host: Does the Moon have natural resources?  Samuel Lawrence: Well, that's one of the great discoveries we made during Apollo. So even before -- even before we started to understand the nature of the polar volatile deposits that everyone is talking about today, even during the Apollo missions we began to have an understanding that the Moon actually did have a lot of resources that could enable future human exploration. Jack Schmidt, the only geologist who ever flew to the Moon, sampled a thing called a pyroclastic deposit at the Apollo 17 site. And it turns out those are spread across the near side of the Moon. They have a uniform chemical composition. We can use simple chemistry to extract water and oxygen from these materials. They're large. And so this field -- we had, you know, lunar base concepts in the 80's that would have worked that used these deposits as the feedstock to sustain astronauts on the lunar surface. So you know, we've been thinking about this problem for a long time. And then in 1994, the Clementine mission was flown and that discovered the first tantalizing hints of potential water deposits or potential volatile deposits I should say at the lunar poles.  Host: You want to make the distinction between water deposits and volatile deposits?  Samuel Lawrence: Well, there's a perception out there that there are these skating rinks hidden in the lunar poles. And unfortunately or that is not in fact the case. Our lunar reconnaissance orbiter mission has shown that there is no observable skating rinks at the lunar poles.  Host: No big slabs of ice.  Samuel Lawrence: No big slabs of ice. But it has detected pretty conclusively -- and there was a mission called LCROSS, the Lunar Crater Remote Observation Sensing Satellite.  Host: Good for you.  Samuel Lawrence: It was co-manifested on the LRO launch in 2009 that impacted into Cabeus Crater on the Moon and discovered the unambiguous presence of water, H2O. And a lot of other possibly economically useful materials as well like methane. And the reason this works -- we sort of skipped a step there -- is that the Moon has a slightly tilted orbit. And so there are areas at the lunar poles where the sun both never stops shining or effectively, you know, where you have a lot of illumination, and where the sun never shines.  Host: And when you say tilted, you're saying -- is that in reference to --  Samuel Lawrence: To the sun.  Host: To the sun.  Samuel Lawrence: That's right.  Host: And the side of the Moon that we see is the same side all the time.  Samuel Lawrence: That's right. Because the Moon is tidally locked. And there is no dark side of the Moon. This isn't an Isaac Asimov novel. There's a far side of the Moon which we never get to see, but it does get the same day/night cycle that the rest of the Moon does. But at the lunar poles, and this is why this is the target for the Artemis program, there are these areas of near-permanent illumination. And that has a couple of very positive effects. It means that the lunar night only lasts for something like 6-7 days at a stretch as opposed to 14 days. And you get 200-day periods each year where the sun never stops shining. And so it's a great spot to put down a stake hold and try to figure out how to live and work on other planets.  Host: Because you would have 200 days of sunlight to provide power?  Samuel Lawrence: That's right. And it's also a benign thermal environment. So on the moon there's this diurnal day/night cycle with an extreme of temperatures. And at the poles the swing is much less. It makes it easier to design habitats. It makes it easier to design systems to enable astronaut habitation on the surface.  Host: The change is less but still what's the temperature we're talking about? It's not an Earth kind of temperature.  Samuel Lawrence: It's equivalent to what you'd see on the International Space Station. So you're looking at around 200 degrees Fahrenheit in the daytime.  Host: Okay. So it's an environment that we already kind of know how to live in?  Samuel Lawrence: That's right.  Host: We're talking about natural resources. Are these natural resources -- it sounds like they would be useful to us in order to be able to go there and stay, as opposed to resources that are valuable that people would want to go and take away and sell somewhere.  Samuel Lawrence: It's very difficult to make the case that anything you mine in space is ever going to come back to Earth, for now. That could change in the future, but for right now the most near-term utility for lunar resources or any space resources -- and asteroids are chock full of useful things too, useful for people in space. So the things we're interested in are oxygen. Oxygen is rocket propellant, the stuff you breathe. We're interested in the possible, you know, volatiles which is hydroxyl, because that can be easily split off into oxygen and hydrogen which is rocket fuel. So there are -- you know, the near-term things --  Host: And the oxygen is water? Or the other way around?  Samuel Lawrence: Yeah.  Host: Yeah.  Samuel Lawrence: Yes.  Host: Yeah.  Samuel Lawrence: The water can easily be converted into oxygen and hydrogen.  Host: Right.  Samuel Lawrence: So you know, we care about these things because oxygen is not only the stuff you breathe but it's oxidizer for rocket fuel. The hydrogen could also be rocket fuel. And so, like I said, the near-term thing is going to be focusing on enabling and making human exploration more sustainable. And the reason why is that it takes roughly six times -- there's a six-to-one gear ratio for getting stuff to the Moon, is sort of the lingo. And that's because for every pound you have to take to the lunar surface it takes roughly six pounds of fuel to get it there.  Host: Okay.  Samuel Lawrence: So give or take. So anything you can make on the lunar surface will eventually pay for itself, no matter how -- you know, and you always hear people talk about, \"Oh, you know, launch prices will go down eventually.\" Sure. Maybe. But it still doesn't change the fact you're still going to take six times as much fuel to get something to the lunar surface. So the more you can make on the Moon, the easier it will be to sustain a human presence there.  Host: The less you have to take.  Samuel Lawrence: The less you have to take.  Host: And the less of your resources here on Earth you have to expend for that portion of it.  Samuel Lawrence: That's right. And also you have to learn how to live off the land if you're ever going to do Mars sustainably too. Because you're much, much farther away than, you know -- going to Mars is a much bigger technological leap and to really do it right, again, if you're going to do it in a way that doesn't eventually get cancelled, you want to have a sustainable presence on the Martian surface. You have to learn how to live off the land and use local resources. So it's an important paradigm shift and we can get started doing it on the Moon.  Host: You made reference to the lunar South Pole as a place where water, ice, has been found. Are there other of these valuable materials also in that same general region, making it a nice target for us to want to go to first?  Samuel Lawrence: I mean, what do you mean valuable materials?  Host: Well, the other natural resources.  Samuel Lawrence: Oh, other natural resources. Well, you can take lunar regolith and craft oxygen out of it pretty much anywhere on the Moon.  Host: And regolith is?  Samuel Lawrence: Lunar soil.  Host: Okay.  Samuel Lawrence: Yeah.  Host: And you can get oxygen out of the dirt?  Samuel Lawrence: Yeah. It's chemistry. You can do it. So you can -- some of the higher-grade resources are only found in equatorial regions of the Moon. So we'll have to -- like I said, this is a marathon, not a sprint. So we want to try to establish a beach head at the lunar South Pole and then eventually branch out to doing other missions to other places with gradually increasing capability. And that is why the Moon is very interesting, because it's not just an interesting scientific target. It's an interesting aspiration target. And we are not -- we don't just want to go to Moon and stay there. Going to the Moon actually gives you the capabilities you need to go anywhere you want in the solar system with any capability you might actually have.  Host: The things we can learn by going to the Moon and staying teach us.  Samuel Lawrence: And the workforce and technologies required to go back to the Moon will reenergize the aerospace industrial base and give us a body of knowledge which you know, I mean, has been lost or is on the verge of being lost. The Apollo generation is leaving us. No one alive, or very few people present at the agency today have designed a vehicle that's landed human beings on another world.  Host: Right.  Samuel Lawrence: And so we actually need to relearn how to do stuff we once learned how to do.  Host: We've been talking for a few minutes about what there is on the Moon and it occurs to me to make sure I understand how we know that. I mean, we didn't -- it's been 50 -- almost 50 years since the last human beings went there and gathered up samples for us to bring back. But is that the primary way that we know about what's on the Moon? Or have we learned it from other things? And I'm thinking particularly of the Lunar Reconnaissance Orbiter that you also worked on.  Samuel Lawrence: Right. Well, over the past two decades we've had a nice renaissance in lunar exploration. Because it's not -- yeah, like I said, the Moon is a very accessible target and so it's something we can actually get to relatively straightforwardly. And so we've had certain -- the Clementine mission which gave us our first global mineralogical maps of the Moon and the first tantalizing hints of polar volatile deposits. We've also had a series of international missions. So we've had our colleagues in India launch the Chandrayaan mission, Chandrayaan I. And you have Chandrayaan II on its way to the Moon right now. We have had the European Space Agency launch SMART I. Our colleagues in Japan launched the KAGUYA mission. And KAGUYA was a fantastic mission. It produced a tremendously valuable global dataset for mineralogy and composition and topography. Then we also finally had the Lunar Reconnaissance Orbiter which was launched in 2009 as the first step of the -- first actual mission launched as part of the vision for space exploration, President Bush's former program to return to the Moon and stay and go on to Mars. And so LRO really I think is an example of how you know -- how science can enable human exploration. The mission was an exploration mission, an ESMD, Exploration Systems Mission Directorate mission, but it was staffed by Science Mission Directorate scientists and it was expressly designed to collect the data needed to enable a program of lunar exploration. But along the way, it also produced fantastic paradigm-shifting science and reinforced the Moon's status as the cornerstone of planetary science. So it made a series of very important discoveries. Among them abundance of volatile deposits at the lunar polar regions, but also new details of lunar mineralogy, lunar chemistry, the lunar landforms we can see with LRO's camera system, land forms as small as a meter in diameter.  Host: Wow.  Samuel Lawrence: So we've discovered all kinds of interesting things about lunar geology and the physics of the impact process, and created a whole new set of places we really want to send astronauts and their robotic precursors. So ten years into the mission, we have fuel for six or seven more years of operations. It's my finest hope that we can actually have LRO still in orbit and taking images when the next American steps onto the surface are taken. That would be a nice shot.  Host: Overhead shot.  Samuel Lawrence: Yeah, that would be a nice symbolic closure of the mission.  Host: It would. I've wanted to set the stage for what there is there on the Moon to talk about what we would find when we go back. And part of your current portfolio is that you're working on developing the scientific objectives and the ways to do research during the Artemis missions that are coming up. It's still early in Artemis.  Samuel Lawrence: Still early.  Host: To the extent that you can, what's the outline of flights as we understand it so far?  Samuel Lawrence: Sure.  Host: What's the early plan?  Samuel Lawrence: Well, we had an exciting conference in January of 2018 called the Lunar Science for Landed Missions Workshop that went through and it was a great meeting and it went through -- it was sponsored by our friends at the Solar System Exploration Research Virtual Institute. And it was at the Ames Research Center. And that was a great meeting. It was the science community coming together and going, \"These are our high-priority targets for where we'd like to send precursor missions and also\" -- it was mainly focused on precursor missions, but all the stuff from that workshop is equally applicable to the human missions. So an inherent part of the Artemis concept is that we have this thing called the Lunar Discovery and Exploration Program. So part of that is going to be -- it's an exciting program. It's leveraging the power of American enterprise and American industry to create a whole new set of lunar landing vehicles and designs to carry payloads to the lunar surface. And as part of that program, or actually as part of LDEP we're going to be landing exciting new missions for science at various spots around the lunar surface. I don't know where they're going to be landing, but they've selected instruments and they've selected payloads and there's several contractors working right now to create new American lunar landing systems that will take US payloads to the lunar surface. So that's really exciting, and that's a key capability. Because as I mentioned previously it's been five decades since the United States landed a spacecraft on the lunar surface. So I view LDEP as a really important part of our lunar portfolio and I'm really looking forward to the discoveries those missions are going to make.  Host: And if I can, to be clear, the LDEP payloads are not humans down to the Moon.  Samuel Lawrence: That's right.  Host: These are research missions.  Samuel Lawrence: That's right. But for this to work and work sustainably, we're going to have to have robots and humans working together. And I think that really does act as a force multiplier and it's going to make our exploration more effective and efficient and affordable when we can have regular cadence of missions going to the lunar surface. Because I could see scenarios where you are flying payloads designed to understand how to produce resources on the lunar surface to the moon on these LDEP payloads.  Host: If we're going to make use of those resources, we've got to have the tools to do it.  Samuel Lawrence: You've got to have the tools to do it. So I think it's a very good synergy between the mission directorates. It's a very exciting program. It's very innovative. It's going to be I think really exciting to see what American commerce can bring to the game in a way that is designed to enable innovation. And then moving on beyond LDEP which is our first missions as part of so-called Artemis umbrella are going to be LDEP missions.  Host: Okay.  Samuel Lawrence: In the early 2020's. And then we have the Artemis III and that's the first human mission as part of the Artemis program, presumably the seventh human lunar landing. And we have clear direction from above to land at the lunar South Pole which is a very interesting location. Like I said, there are -- it's an interesting environment that is enabling for future human exploration for long durations on the lunar surface. There's potential access to these volatile deposits which are not only interesting as a potential resource but are also interesting scientifically because it's that -- like I said, the first billion years of history. So we can go to these volatile deposits and presumably understand how organics and other cometary materials evolved over time in the solar system. That's an interesting thing scientifically. And there's also rocks we can pick up, and potential multiple -- potentially sampling multiple lunar terrains with access to the -- or excuse me, which could be accessed by landing at the South Pole. And by astronauts doing field work. So it's an interesting location. We're still working on some of the details here, but in general the idea is astronauts will land there and get out of the spacecraft, do space walks and make some very interesting new discoveries as they start to figure out what it's going to take to learn how to live and work on other planets.  Host: So if that's Artemis III, Artemis I and II and LDEP missions?  Samuel Lawrence: No, no.  Host: No? Okay.  Samuel Lawrence: Those are the missions formerly referred to as Exploration Mission I and Exploration Mission II on the space launch system.  Host: I see.  Samuel Lawrence: So those are Orion test flights in lunar space.  Host: Okay. And Artemis III gets the first humans back to the Moon?  Samuel Lawrence: That's right.  Host: And you made reference there, if I can -- there's a little exit ramp there. You were talking about doing exploration and finding evidence of the evolution of comets?  Samuel Lawrence: Well, sort of.  Host: Okay.  Samuel Lawrence: That was perhaps inelegantly phrased by me. What I'm alluding to here is again the Moon preserves its first billion years of history of the Earth/Moon system. And the reason why you have these polar volatile deposits is that again the Moon has these areas where the sun never shines. And when comets which are sort of wet, muddy ice balls hit the Moon, those volatiles during the lunar day/night cycle literally hop from one spot to another on the lunar surface. And eventually they get trapped in these cold traps at the poles. That process has presumably been going on for most of the history of the solar system. So by going to these volatile deposits in the lunar Polar Regions and studying them -- and we will get some of this data as we use these resource deposits for resources as we do resource extraction. As you start to really dig down into these deposits, you will get interesting information about how these volatile rich compounds, you know, water, methane, have involved over the complete four-billion-year history of the solar system.  Host: Because you will have had evidence of them from throughout that timeline.  Samuel Lawrence: That's right. That's right. And we just went to the Moon and found it. And so it's going to be very interesting to see what develops out of this.  Host: How do they hop from one place to another on the Moon?  Samuel Lawrence: Boiling. So the water boils and then it gets so far -- some of it gets lost to the space environment, obviously.  Host: Okay.  Samuel Lawrence: Some of it lands when the sun goes down, and then the sun rises and the process repeats. And then eventually, so you know, from the giant ice ball that hit the Moon at the equator, a few molecules wind up in the lunar poles.  Host: It's dispersed.  Samuel Lawrence: Yeah. But they get trapped in the polar environment. That's a gross oversimplification. I'm sure some of my colleagues are cringing at the thought of it.  Host: Well, but you can imagine why when I heard it hops from one place to another that you had more clarification than that.  Samuel Lawrence: Indeed.  Host: So you talked about up to Artemis III and the first humans that would land by 2024. Are there plans for further human missions in that timeline beyond that?  Samuel Lawrence: Sure. I mean, the idea is --  Host: Do we know much yet?  Samuel Lawrence: A lot of this is still under development. But you've seen in some of the public talks given recently at the NASA advisory council and other places, there is essentially -- there are plans for other missions beyond 2024. So usually --  Host: Since we're going to stay.  Samuel Lawrence: Since we're going to stay, yes. So you've seen charts shown that show, you know, one mission a year in '25, '26, '27, '28 and continuing thereafter. So it should be interesting.  Host: Yeah.  Samuel Lawrence: As we establish this capability to do human planetary exploration.  Host: What would you say are both the immediate and the long-term goals of Artemis at the moment?  Samuel Lawrence: Well the long-term -- the immediate goal is to reestablish a credible capability to get human beings onto another planet. And you know, this, like I said, it's something we haven't done in a while. And if you're really going to be credible about saying, \"Yes, we can go to Mars or go to Sirius,\" or go to other places we want to go to, it makes sense to establish that capability in a place that's really only a few days away. Where you can take risks and have some confidence you might be able to get back to earth in a reasonable timeframe to preserve human life. The other -- there are other near-term objectives too. I mean, one of them besides reestablishing planetary exploration with human beings is understanding the lunar resource potential and understanding how to use it. Understanding how to incorporate that into human space flight architectures I think is a really key paradigm shift.  Host: Knowing more about what's actually there on the ground.  Samuel Lawrence: Knowing -- well, both. More about know what's actually there in the ground and providing ground trips, but also figuring out how to design systems that can leverage it once you find it there. Because again, you have to do that for just about anywhere else you want to go in the solar system.  Host: Sure.  Samuel Lawrence: So it's a key paradigm shift. And understanding how to, you know, refuel a spacecraft in microgravity or fractional gravity environments is a thing we've never -- don't have a lot of experience with. So we need to get some of that. Understanding and developing systems that can handle not just days on the lunar surface but months or even years of surface operations is critical for understanding, for enabling again longer journeys to Mars and beyond. So I think there's this whole host of technology development things that should and will come out of the Artemis program. There's scientific discoveries about the nature of the early Earth/Moon system, of fundamental planetary science processes. There's also things you can do on the Moon that aren't related to geology. There's interesting -- there's interesting things you can do from materials science. There's interesting scientific objectives for understanding the biological impacts of fractional gravity on human beings. Again, we have lots of data from ISS. We have lots of data at 1G on this planet.  Host: Yeah.  Samuel Lawrence: Very little between those two extremes. So having astronauts on the lunar surface for months or even years at a time or for weeks or months, possibly even years at a time will provide a critical data point for understanding what fractional gravity -- what the effects of fractional gravity are in human beings and possibly also developing coherent mitigation strategies for them. It is possible there is some number between zero and one where the deleterious effects of microgravity exposure are mitigated to some large degree. And that could be very useful for future exploration.  Host: I think it's very important that you point that out. Because a lot of times we, I think, maybe overlook the fact that the microgravity environment that we're learning about on the space station is not what you have on the Moon.  Samuel Lawrence: No. It's not what you have on Mars either. Yeah.  Host: There is gravity there. Not as much as Earth, but there is gravity.  Samuel Lawrence: There is gravity. And it turns out, you know, there are areas on the Moon, like I said, the far side is shielded. It never sees the near side. So there are interesting things you can do from radio astronomy, looking for the early cosmic dawn. There's teams of astronomers who are really excited about putting a radio telescope on the lunar far side. Again, with a field station on the lunar surface, permanent power production infrastructure, these kind of long-duration experiments become very possible. And the Moon I think will eventually become a platform very much like the ISS where you can use it for a variety of interesting things. And that's really exciting. You know, I can't -- it's difficult to predict the future. You know, always in motion, the future is. But once you establish the capability to access the Moon's surface on a regular basis, have infrastructure there to support long-duration experiments and activities, very exciting things are going to start happening. It's going to be very interesting to see.  Host: Set up on the far side of the Moon and able to look out in a way that we can't do from earth.  Samuel Lawrence: That's right. Because it shields all the radio transmissions, right?  Host: Those coming from Earth?  Samuel Lawrence: Those coming from Earth. Earth is very noisy, but the far side of the moon is very quiet so you can actually do interesting radio astronomy from the lunar far side that is unique for the solar system.  Host: Talk a little bit about what kind of work we're doing now and work we need to be doing in the near-term future in order to support these goals of Artemis on the Moon.  Samuel Lawrence: Yeah, it's very interesting. So some of this work, you know, we've restarted it. It was quiescent for some time. So some of that work is slowly coming back to life as we realize we have to do this again. We're looking at where do you actually land? Where are the spots on the lunar surface that are safe that can be accessed by astronauts and robotic precursor missions? How do you account for, is there enough space to put landers down close together without having dust impingement on each other? So there's a lot of applied science research going on right now as we try to answer these questions in a way that makes sense and enables value to the taxpayer. We're working on the new space suits that will enable lunar missions. We're working on developing mobility systems that will let astronauts -- you know, like rovers that will let them go.  Host: Yeah.  Samuel Lawrence: From their lander and go out to do exploration, working on ISRU systems, in-situ resource utilization designed to use lunar resources and produce things of value to human explorers. We have American companies working on commercial landers right now to enable the goals of the Lunar Discovery and Exploration Program. So there's a lot of work which has all of the sudden come into very clear focus thanks to the challenge of the 2024 deadline.  Host: You've mentioned just then and earlier too about international and private or commercial participation in all of this. This is not just a NASA by itself effort, is it?  Samuel Lawrence: No. No, it's not. We have -- there's been for the last decade significant international interest in lunar exploration. And I think to paraphrase John Kennedy, you know, it's as true now as it was when he said it back in 1962 at Rice University. Whatever human beings undertake, free humans must fully share. There is a lot of international interest in the Moon. And I think, you know, it is incumbent upon the United States to lead the way back. And so I think there's a lot of -- I think there's going to be a lot of opportunities, good opportunities for our international partners to make meaningful contributions to the success of the program. All that is being worked on right now, so I would imagine there's a lot of excitement out there in the domestic United States community about a renewed emphasis on lunar exploration. And there's a lot of excitement from international partners about the United States finally committing to go back to the lunar surface.  Host: Well, the European Space Agency is already participating in the Orion Spacecraft.  Samuel Lawrence: That's right.  Host: But other national space agencies are I guess -- are they being encouraged to participate?  Samuel Lawrence: Yes, they're being strongly encouraged to participate and I think that would be most welcome.  Host: And you talked about in the LDEP missions, private companies are already working on some of these -- I don't know what the right way to put it is -- but science experiments that will be going and landing on the Moon on their own.  Samuel Lawrence: That's right, yes.  Host: As well as, you know, work has begun somewhere I'm sure on figuring out the actual mechanism of putting the human beings down on the Moon too.  Samuel Lawrence: Yeah, that's right. While that process -- there's already -- there was already a set of -- there was an action taken earlier this year. We call it on the inside appendix E which were essentially study contracts given to industry to study human lunar landing systems. And that's in progress right now.  Host: Before we get too far away from the mention of it, we were talking a minute ago about dust, moon dust. And one of the things that I learned a lot about during all the recent attention to the 50th anniversary of the first Moon landing was how much of a real problem the dust was in how it messes up our stuff that we bring there.  Samuel Lawrence: Yeah. That's actually true. But this is not -- so the dust is a problem. But keep in mind-  Host: I'm not saying that it can't be defeated, but it is one of the really -- one of the big things that people have to --   Samuel Lawrence: Yeah it is. It's something you're going to have to do anyway, no matter where you go in the solar system.  Host: Right.  Samuel Lawrence: It turns out you find dust. So it's something we're going to have to address. And also keep in mind that most of the Apollo systems were designed in the early 1960's before we had any sense of what the lunar surface was like. So yes, they had a lot of problems during the Apollo missions. Some of that was caused by the fact they took good guesses, guesses that pretty much actually worked.  Host: Yeah.  Samuel Lawrence: We'd go to the Moon, we landed safely, we returned safely. We brought back 800 pounds of lunar rocks. But you know, most of those systems were designed well in advance of any realistic or actual knowledge of what the lunar surface was going to be like. So now that we have that knowledge, now that we fully understand the characteristics of the lunar environment, I'm actually pretty confident we can come up with engineering-based solutions to most of the dust issues that people are presently worried about. So I mean, it is something you have to worry about. It is something you pay attention to. But at the same time, we actually do know what the lunar environment is like and that will make I think all the difference in the world this time.  Host: Yeah. You're starting further ahead.  Samuel Lawrence: We're not starting from zero, yeah.  Host: As we did before.  Samuel Lawrence: Yeah.  Host: You've mentioned that a big part of the goal of the Artemis program is to return human beings to the Moon to stay, to create a sustainable presence. And we've talked about how we want to use the resources that we will find there in order to support this sustainable presence. Is a sustainable presence on the moon the same kind of thing -- or is it the same thing as a sustainable presence on Mars, which is the long, long-term goal of this?  Samuel Lawrence: Well, I would contend that the knowledge you get from going back to the Moon to establish a sustainable presence there will actually make a Mars mission happen a lot sooner. Because you have that workforce and industrial base recapitalized, I think it actually makes Mars missions more feasible, not less. It'll happen more quickly, not farther away. But that's common sense, right? Once you've done it on the Moon, it should be a lot easier to get the confidence back to go back to thinking about how to do Mars.  Host: You learn at least the general outlines of what you have to do. But there are going to be differences between the environments.  Samuel Lawrence: There will be key differences. Yeah, there are. But I would -- they are actually probably going to be pretty similar. I mean, if you look at the body of work that's been done recently for the -- there's been a lot of series of conferences and people have thought about this a lot. There's this concept of the Mars field station. And if you look at what that is, it's shockingly similar to what you might actually envision for a lunar field station too. So I guarantee you that establishing a sustainable presence on the lunar surface will buy down a significant amount of risk and develop a significant amount of industrial experience in how to create and fabricate habitats and have them be successful for the Martian experience. You know, there is a big difference -- it will shock you I'm sure to learn -- from going from a PowerPoint slide to actual hardware. [Laughter] And that is a gap we need to figure out how to jump to before we can start to really credibly talk about going to Mars with human beings. And you will do that on the Moon in a place where you can make mistakes and it's less bad.  Host: Yeah. It's exciting to be looking at really doing something like this, doing something that we did 50 years ago, but on steroids, in a different way. No?  Samuel Lawrence: It's different.  Host: Okay.  Samuel Lawrence: Again, 50 years ago we did camping trips.  Host: Right.  Samuel Lawrence: We have never established a permanent or semi-permanent, whatever you choose to call it -- I mean, humans won't be there the whole time. They'll be there some of the time. But we've never put down permanent human-tended infrastructure on another planet before, another world I should say. The Moon is not a planet. It's a world. But we've never done that before. It's new, it's exciting, it's a capability we have never had before, and I think people say, \"Oh, the Moon, we've been there, we've done that.\" No, we really haven't. We went there five decades ago. We landed in six spots and we only stayed there for a few days. When we go back, this time sustainably, this time to stay, that is something we have never done before. And it will accrue incredible value for the United States, for our allies and it will send a powerful message to the rest of the world of what we can do when we can put our minds to it. Because you see the moon with your naked eye. You can see it every day. No matter how dark the sky is, no matter how much pollution there is, no matter how much light pollution there is, you can still see the moon. And when you have Americans living and working on the surface of the Moon that sends a powerful message to the rest of the world about what we can accomplish.  Host: And that's exciting.  Samuel Lawrence: Yes, it is.  Host: I think that's exciting. This is not the first time that the United States has said we're going to return to the Moon and build on what we've learned from Apollo. What needs to happen so that Artemis can succeed where those previous efforts didn't?  Samuel Lawrence: Well, I think -- this is just me speaking personally. I'm not going to speak for the agency in this case. This is my perspective.  Host: What do you think is required for this effort to work?  Samuel Lawrence: I think we have to be very good stewards of US taxpayer dollars, more than anything else. They trust us. It is a special obligation and a special privilege to work for the American people. And I think when you go to them and say, \"We need your support to do something really exciting and provide value,\" it is incumbent upon us to make it work. It's up to us. So we have to say, here's the value proposition. These are all of the different ways. These are all of the different industries here in the United States we're going to be creating as part of this effort. Here's all the different ways we're going to enhance science, technology, engineering, medicine in this country. And here is the value proposition. It's up to us to sell it. You know, we have to be good stewards with taxpayer dollars, but in return we have to deliver. It's up to us. So that's my answer to that question. It is up to us. We have to deliver. We have to provide value. We have to do it in a way that is different and actually works this time. It is not sufficient to say we're going to do something and not do it. If we say we're going to do it, we have to do it. We have to deliver.  Host: Dr. Samuel Lawrence, thank you very much.   Samuel Lawrence: Yeah, you're very welcome.  [ Music ]  Host: If you listened to the first part of our “Heroes Behind the Heroes” series about recovering recordings of the Apollo 11 mission control team -- by the way its episode 88 posted on April 19th -- it's still there online if you didn't. Well, you know I tried to set the scene with some historical precedent for the attraction of exploring the Moon. And now I wish I had talked to Sam Lawrence too so I could have mixed in some delicious scientific reasons why bringing the Moon into our orbit in a symbolic sense was such a draw for folks back in the 1960's and for many still is today. To get more into the details of what's on the drawing boards for the Artemis program right now, go to NASA.gov/Artemis, or check out NASA.gov and follow the links to Moon to Mars, and to humans in space. I'll remind you that you can go online to keep up with all things NASA at NASA.gov. Also, it would be a good idea for you to follow us on Facebook, Twitter and Instagram. You will thank me. When you go to those sites, use the hashtag #AskNASA to submit a question or suggest a topic for us. Make sure to make a note that it's for Houston, We Have a Podcast. You can find the full catalog of all of our episodes by going to NASA.gov/podcasts and scrolling for our name. You'll also find other exciting NASA podcasts right there at the same spot where you can find us. NASA.gov/podcasts. Very convenient. This episode was recorded on August 28th, 2019. Thanks to Alex Perryman, Gary Jordan, Norah Moran and Belinda Pulido for their help with the production. To Noah Michaelson for his help in arranging the guests, and to Sam Lawrence for sharing his knowledge and insights about the object of our affection. We'll be back next week.",
                title:
                  "Houston, We Have a Podcast. Episode 114: The Value of the Moon",
                keywords: [
                  "Houston We Have A Podcast, episode 114, nasa, johnson, space, center, The Value of the Moon",
                ],
                nasa_id: "Ep114_Value of the Moon",
                date_created: "2019-10-18T00:00:00Z",
                media_type: "audio",
                description_508: "Full transcript in the Description",
                center: "JSC",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA02322/collection.json",
            data: [
              {
                center: "JPL",
                title: "Triptych of the Moon",
                nasa_id: "PIA02322",
                date_created: "1999-09-10T00:40:45Z",
                keywords: ["Moon", "Cassini-Huygens"],
                media_type: "image",
                description_508:
                  "This composite image was made from NASA Cassini which captured a significant portion of the Moon during a Moon flyby imaging sequence.All three images have been scaled so that the brightness of Crisium basin, the dark circular region in the upper right,",
                secondary_creator: "NASA/JPL/Space Science Institute ",
                description:
                  "This composite image was made from NASA Cassini which captured a significant portion of the Moon during a Moon flyby imaging sequence.All three images have been scaled so that the brightness of Crisium basin, the dark circular region in the upper right,",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA02322/PIA02322~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/video/Raising_The_American_Flag_Comparison_720p/collection.json",
            data: [
              {
                description:
                  "Neil Armstrong and Buzz Aldrin raise the American flag on the moon. The video compares existing footage with the partially restored video. The thumbnail image shows the new footage on the left and the old on the right.",
                title: "Raising_The_American_Flag_Comparison_720p",
                photographer: "NASA",
                location: "Earth's Moon",
                nasa_id: "Raising_The_American_Flag_Comparison_720p",
                media_type: "video",
                keywords: [
                  "Neil Armstrong",
                  "Buzz Aldrin",
                  "Moon",
                  "Apollo 11",
                  "lunar landing",
                  "Earth's Moon",
                  "Apollo",
                  "Apollo Program",
                ],
                date_created: "2017-08-03T00:00:00Z",
                description_508:
                  "Neil Armstrong and Buzz Aldrin raise the American flag on the moon. The video compares existing footage with the partially restored video. The thumbnail image shows the new footage on the left and the old on the right.",
                center: "HQ",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/video/Raising_The_American_Flag_Comparison_720p/Raising_The_American_Flag_Comparison_720p~thumb.jpg",
                rel: "preview",
                render: "image",
              },
              {
                href: "https://images-assets.nasa.gov/video/Raising_The_American_Flag_Comparison_720p/Raising_The_American_Flag_Comparison_720p.srt",
                rel: "captions",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA16623/collection.json",
            data: [
              {
                center: "JPL",
                title: "GRAIL Bouguer Gravity Moon Map",
                nasa_id: "PIA16623",
                date_created: "2012-12-05T17:00:16Z",
                keywords: [
                  "Moon",
                  "Gravity Recovery and Interior Laboratory GRAIL",
                ],
                media_type: "image",
                description_508: "GRAIL Bouguer Gravity Moon Map",
                secondary_creator: "NASA/JPL-Caltech/MIT/GSFC",
                description: "GRAIL Bouguer Gravity Moon Map",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA16623/PIA16623~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA12158/collection.json",
            data: [
              {
                center: "JPL",
                title: "Moon Mapper Looks Homeward",
                nasa_id: "PIA12158",
                date_created: "2009-08-03T17:00:38Z",
                keywords: ["Moon", "Chandrayaan-1"],
                media_type: "image",
                description_508:
                  "NASA Moon Minerology Mapper, a guest instrument onboard the Indian Space Research Organization Chandrayaan-1 mission to the moon, looks homeward. Australia is visible in the lower center of the image.",
                secondary_creator: "NASA/JPL/Brown",
                description:
                  "NASA Moon Minerology Mapper, a guest instrument onboard the Indian Space Research Organization Chandrayaan-1 mission to the moon, looks homeward. Australia is visible in the lower center of the image.",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA12158/PIA12158~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA11727/collection.json",
            data: [
              {
                center: "JPL",
                title: "NASA Moon Mineralogy Mapper",
                nasa_id: "PIA11727",
                date_created: "2008-12-17T21:48:15Z",
                keywords: ["Moon", "Chandrayaan-1"],
                media_type: "image",
                description_508:
                  "Different wavelengths of light provide new information about the Orientale Basin region of the moon in a composite image taken by NASA Moon Mineralogy Mapper, a guest instrument aboard the Indian Space Research Organization Chandrayaan-1 spacecraft.",
                secondary_creator: "NASA/JPL/Brown",
                description:
                  "Different wavelengths of light provide new information about the Orientale Basin region of the moon in a composite image taken by NASA Moon Mineralogy Mapper, a guest instrument aboard the Indian Space Research Organization Chandrayaan-1 spacecraft.",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA11727/PIA11727~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/video/GSFC_20110617_LRO_m10794_Eclipse_Librating_Moon/collection.json",
            data: [
              {
                center: "GSFC",
                title:
                  "LRO's Diviner Takes the Moon's Temperature During Eclipse: Librating Moon",
                location: "Goddard Space Flight Center",
                nasa_id: "GSFC_20110617_LRO_m10794_Eclipse_Librating_Moon",
                media_type: "video",
                keywords: [
                  "Moon",
                  "LRO",
                  "Lunar Reconnaissance Orbiter",
                  "Diviner Lunar Radiometer Experiment",
                  "DLRE",
                  "Planetary Science",
                  "Lunar Eclipse",
                  "Lunar Surface",
                  "Lunar Surface Temperature",
                  "Sun",
                  "Planets and Moons",
                ],
                date_created: "2011-06-17T00:00:00Z",
                description_508: "View of the librating moon.",
                secondary_creator:
                  "Genna Duberstein, Ernie Wright, Chris Smith, Chris Meaney",
                description:
                  "During the June 2011 lunar eclipse, scientists will be able to get a unique view of the moon. While the sun is blocked by the Earth, LRO's Diviner instrument will take the temperature on the lunar surface. Since different rock sizes cool at different rates, scientists will be able to infer the size and density of rocks on the moon.",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/video/GSFC_20110617_LRO_m10794_Eclipse_Librating_Moon/GSFC_20110617_LRO_m10794_Eclipse_Librating_Moon~thumb.jpg",
                rel: "preview",
                render: "image",
              },
              {
                href: "https://images-assets.nasa.gov/video/GSFC_20110617_LRO_m10794_Eclipse_Librating_Moon/GSFC_20110617_LRO_m10794_Eclipse_Librating_Moon.vtt",
                rel: "captions",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/video/GSFC_20161003_MusicVideo_m12366/collection.json",
            data: [
              {
                album: ["LRO"],
                description:
                  '"The Moon and More" is a music video featuring musicians Javier Colon (Season 1 winner of NBC\'s "The Voice"), and Matt Cusson in collaboration with NASA\'s Goddard Space Flight Center and the Lunar Reconnaissance Orbiter (LRO) mission.  Song: "The Moon and More" - Written, Produced, and Performed by Javier Colon and Matt Cusson. Bass by Uriah Duffy. Audio Mix & Mastering by Jack Deboe. Javier Colon appears courtesy of Concord Records',
                title: "The Moon and More",
                photographer: "David Ladd Robert Andreoli",
                location: "Goddard Space Flight Center",
                nasa_id: "GSFC_20161003_MusicVideo_m12366",
                media_type: "video",
                keywords: [
                  "Moon",
                  "Music",
                  "LRO",
                  "Lunar Reconnaissance Orbiter",
                ],
                date_created: "2016-10-03T00:00:00Z",
                description_508:
                  '"The Moon and More" - a music video starring musicians Javier Colon and Matt Cusson.',
                secondary_creator: "David Ladd",
                center: "GSFC",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/video/GSFC_20161003_MusicVideo_m12366/GSFC_20161003_MusicVideo_m12366~thumb.jpg",
                rel: "preview",
                render: "image",
              },
              {
                href: "https://images-assets.nasa.gov/video/GSFC_20161003_MusicVideo_m12366/GSFC_20161003_MusicVideo_m12366.vtt",
                rel: "captions",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001982/collection.json",
            data: [
              {
                album: ["Test"],
                center: "GSFC",
                title: "The Moon",
                keywords: [
                  "The Moon",
                  "moon",
                  "space",
                  "nasa",
                  "lro",
                  "goddardspaceflightcenter",
                ],
                location: "Greenbelt, MD",
                nasa_id: "GSFC_20171208_Archive_e001982",
                date_created: "2017-12-08T00:00:00Z",
                media_type: "image",
                description:
                  'This composite image of the moon using Clementine data from 1994 is the view we are most likely to see when the moon is full.   Credit: NASA  To learn about NASA\'s LRO project go to: <a href="http://www.nasa.gov/mission_pages/LRO/main/index.html" rel="nofollow">www.nasa.gov/mission_pages/LRO/main/index.html</a>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b>  contributes to NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s endeavors by providing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASA_GoddardPix" rel="nofollow">Twitter</a></b>  <b>Join us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>',
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001982/GSFC_20171208_Archive_e001982~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA12232/collection.json",
            data: [
              {
                center: "JPL",
                title: "Dispersing Light through the Moon Mineralogy Mapper",
                nasa_id: "PIA12232",
                date_created: "2009-09-24T18:00:19Z",
                keywords: ["Moon", "Chandrayaan-1"],
                media_type: "image",
                description_508:
                  "Dispersing Light through the Moon Mineralogy Mapper",
                secondary_creator: "NASA/JPL-Caltech",
                description:
                  "Dispersing Light through the Moon Mineralogy Mapper",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA12232/PIA12232~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/video/NHQ_2018_1129_NASA Announces New Moon Partnerships with US Companies/collection.json",
            data: [
              {
                center: "HQ",
                title:
                  "NASA Announces New Moon Partnerships with U.S. Companies",
                keywords: [
                  "Jim Bridenstine",
                  "Moon partnerships",
                  "Space Policy Directive-1",
                ],
                nasa_id:
                  "NHQ_2018_1129_NASA Announces New Moon Partnerships with US Companies",
                date_created: "2018-11-29T00:00:00Z",
                media_type: "video",
                description:
                  "On Nov. 29, NASA invited media to its headquarters in Washington, D.C. for the announcement of new Moon partnerships with American companies. Working with U.S. companies is the next step to achieving long-term scientific study and human exploration of the Moon and Mars. Under Space Policy Directive-1, the agency will lead an innovative and sustainable exploration of the Moon together with commercial and international partners.  ***This video has been edited to correct an audio issue***",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/video/NHQ_2018_1129_NASA Announces New Moon Partnerships with US Companies/NHQ_2018_1129_NASA Announces New Moon Partnerships with US Companies~thumb.jpg",
                rel: "preview",
                render: "image",
              },
              {
                href: "https://images-assets.nasa.gov/video/NHQ_2018_1129_NASA Announces New Moon Partnerships with US Companies/NHQ_2018_1129_NASA Announces New Moon Partnerships with US Companies.srt",
                rel: "captions",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/video/GSFC_20190618_LRO_m13229_10Years/collection.json",
            data: [
              {
                center: "GSFC",
                title: "10 Years at the Moon",
                location: "Goddard Space Flight Center",
                nasa_id: "GSFC_20190618_LRO_m13229_10Years",
                media_type: "video",
                keywords: [
                  "Moon",
                  "Lunar Reconnaissance Orbiter",
                  "Lunar",
                  "LRO",
                  "Planets and Moons",
                ],
                date_created: "2019-06-18T00:00:00Z",
                description_508:
                  "This video celebrates the Lunar Reconnaissance Orbiter mission's 10th anniversary at the Moon, highlighting some notable accomplishments.",
                secondary_creator: "David Ladd, Noah Petro",
                description:
                  "NASA’s Lunar Reconnaissance Orbiter mission now celebrates its 10-year anniversary of being at the Moon. After launching on June 18, 2009 and entering lunar orbit on June 23rd, the spacecraft continues to collect vast amounts of data vital to our understanding of the lunar landscape and environment, our solar system, and to our future exploration goals for the Moon and Mars. This video highlights some notable facts and accomplishments of the LRO mission over the past decade, all of which are paving the way forward for reestablishing a human presence on the Moon with the newly-announced Artemis program.",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/video/GSFC_20190618_LRO_m13229_10Years/GSFC_20190618_LRO_m13229_10Years~thumb.jpg",
                rel: "preview",
                render: "image",
              },
              {
                href: "https://images-assets.nasa.gov/video/GSFC_20190618_LRO_m13229_10Years/GSFC_20190618_LRO_m13229_10Years.vtt",
                rel: "captions",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000872/collection.json",
            data: [
              {
                album: ["Test"],
                center: "GSFC",
                title: "New Moon",
                keywords: [
                  "New Moon",
                  "moon",
                  "nasa",
                  "phases",
                  "lro",
                  "nasagoddard",
                ],
                location: "Greenbelt, MD",
                nasa_id: "GSFC_20171208_Archive_e000872",
                date_created: "2017-12-08T00:00:00Z",
                media_type: "image",
                description:
                  'New Moon. By the modern definition, New Moon occurs when the Moon and Sun are at the same geocentric ecliptic longitude. The part of the Moon facing us is completely in shadow then. Pictured here is the traditional New Moon, the earliest visible waxing crescent, which signals the start of a new month in many lunar and lunisolar calendars.  NASA\'s Lunar Reconnaissance Orbiter (LRO) has been in orbit around the Moon since the summer of 2009. Its laser altimeter (LOLA) and camera (LROC) are recording the rugged, airless lunar terrain in exceptional detail, making it possible to visualize the Moon with unprecedented fidelity. This is especially evident in the long shadows cast near the terminator, or day-night line. The pummeled, craggy landscape thrown into high relief at the terminator would be impossible to recreate in the computer without global terrain maps like those from LRO.  To download, learn more about this visualization, or to see what the Moon will look like at any hour in 2015, visit <a href="http://svs.gsfc.nasa.gov/goto?4236" rel="nofollow">svs.gsfc.nasa.gov/goto?4236</a>  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission. <b>Follow us on <a href="http://twitter.com/NASAGoddardPix" rel="nofollow">Twitter</a></b> <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b> <b>Find us on <a href="http://instagram.com/nasagoddard?vm=grid" rel="nofollow">Instagram</a></b>',
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000872/GSFC_20171208_Archive_e000872~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA23210/collection.json",
            data: [
              {
                description:
                  "Scientists have discovered these wrinkle ridges in a region of the Moon called Mare Frigoris. These ridges add to evidence that the Moon has an actively changing surface. This image was taken by NASA's Lunar Reconnaissance Orbiter (LRO).  https://photojournal.jpl.nasa.gov/catalog/PIA23210",
                title: "Wrinkle Ridges on the Moon",
                keywords: ["Lunar Reconnaissance Orbiter (LRO)", "Moon"],
                nasa_id: "PIA23210",
                date_created: "2019-05-13T00:00:00Z",
                media_type: "image",
                description_508:
                  "Scientists have discovered these wrinkle ridges in a region of the Moon called Mare Frigoris. These ridges add to evidence that the Moon has an actively changing surface. This image was taken by NASA's Lunar Reconnaissance Orbiter (LRO).",
                secondary_creator: "NASA",
                center: "JPL",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA23210/PIA23210~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA00405/collection.json",
            data: [
              {
                center: "JPL",
                title: "Earth Moon",
                nasa_id: "PIA00405",
                date_created: "1998-06-08T15:17:56Z",
                keywords: ["Moon", "Galileo"],
                media_type: "image",
                description_508:
                  "NASA Galileo spacecraft took this image of Earth moon on December 7, 1992 on its way to explore the Jupiter system in 1995-97. The distinct bright ray crater at the bottom of the image is the Tycho impact basin.",
                secondary_creator: "NASA/JPL/USGS",
                description:
                  "NASA Galileo spacecraft took this image of Earth moon on December 7, 1992 on its way to explore the Jupiter system in 1995-97. The distinct bright ray crater at the bottom of the image is the Tycho impact basin.  http://photojournal.jpl.nasa.gov/catalog/PIA00405",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA00405/PIA00405~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA12927/collection.json",
            data: [
              {
                center: "JPL",
                title: "Mountains of the Moon",
                nasa_id: "PIA12927",
                date_created: "2009-11-17T01:08:49Z",
                keywords: ["Moon", "Lunar Reconnaissance Orbiter LRO"],
                media_type: "image",
                description_508:
                  "Most mountains on the Earth are formed as plates collide and the crust buckles. Not so for the Moon, where mountains are formed as a result of impacts as seen by NASA Lunar Reconnaissance Orbiter.",
                secondary_creator: "NASA/GSFC/Arizona State University",
                description:
                  "Most mountains on the Earth are formed as plates collide and the crust buckles. Not so for the Moon, where mountains are formed as a result of impacts as seen by NASA Lunar Reconnaissance Orbiter.",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA12927/PIA12927~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/video/NHQ_2019_1216_AskNASA_Why Cant We Just Land on the Moon/collection.json",
            data: [
              {
                description:
                  "NASA is working with its partners to design and develop a small spaceship that will orbit the Moon called the Gateway. This spaceship will be a temporary home and office for astronauts, just about a five-day, 250,000-mile commute from Earth.    NASA’s Gateway Program Logistics Element Manager Mark Weiss answers questions about the Gateway’s development’s for the Artemis Missions.   The first logistics service to the orbital outpost is expected to deliver science, cargo and other supplies in support of the agency’s new Artemis lunar exploration program, which includes sending the first woman and the next man to the surface of the Moon by 2024.",
                title: "#AskNASA I Why Can't We Just Land on the Moon?",
                keywords: ["Artemis", "Gateway", "Moon", "Weiss"],
                nasa_id:
                  "NHQ_2019_1216_AskNASA_Why Cant We Just Land on the Moon",
                media_type: "video",
                date_created: "2019-12-16T00:00:00Z",
                center: "HQ",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/video/NHQ_2019_1216_AskNASA_Why Cant We Just Land on the Moon/NHQ_2019_1216_AskNASA_Why Cant We Just Land on the Moon~thumb.jpg",
                rel: "preview",
                render: "image",
              },
              {
                href: "https://images-assets.nasa.gov/video/NHQ_2019_1216_AskNASA_Why Cant We Just Land on the Moon/NHQ_2019_1216_AskNASA_Why Cant We Just Land on the Moon.srt",
                rel: "captions",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/video/NASA 2021 Let's Go to the Moon/collection.json",
            data: [
              {
                description:
                  "Sending the first Artemis mission to the Moon in preparation for human missions, landing a new rover on Mars, and launching the James Webb Space Telescope into space, expanding our ability to see deep into the universe, are just a few of the things NASA has planned for 2021.",
                title: "NASA 2021 Let's Go to the Moon",
                nasa_id: "NASA 2021 Let's Go to the Moon",
                date_created: "2020-12-30T00:00:00Z",
                keywords: [
                  "NASA",
                  "2021",
                  "Look Ahead",
                  "Artemis",
                  "mission to the moon",
                  "James Webb Space Telescope",
                ],
                media_type: "video",
                center: "HQ",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/video/NASA 2021 Let's Go to the Moon/NASA 2021 Let's Go to the Moon~thumb.jpg",
                rel: "preview",
                render: "image",
              },
              {
                href: "https://images-assets.nasa.gov/video/NASA 2021 Let's Go to the Moon/NASA 2021 Let's Go to the Moon.srt",
                rel: "captions",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA13532/collection.json",
            data: [
              {
                center: "JPL",
                title: "Slipher Crater: Fractured Moon in 3-D",
                nasa_id: "PIA13532",
                date_created: "2010-10-12T22:01:02Z",
                keywords: ["Moon", "Lunar Reconnaissance Orbiter LRO"],
                media_type: "image",
                description_508: "Slipher Crater: Fractured Moon in 3-D",
                secondary_creator: "NASA/GSFC/Arizona State University",
                description: "Slipher Crater: Fractured Moon in 3-D",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA13532/PIA13532~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/video/ARC-20200610-AAV3276-VIPER-CLPSAnnounce-RptrPkg-NASAWeb-1080p/collection.json",
            data: [
              {
                description:
                  "NASA’s water-seeking robotic Moon rover just booked a ride to the Moon’s South Pole. Astrobotic of Pittsburgh, Pennsylvania, has been selected to deliver the Volatiles Investigating Polar Exploration Rover, or VIPER, to the Moon in 2023. During its 100-Earth-day mission, the approximately 1,000-pound rover will roam several miles and use its four science instruments to sample various soil environments in search of water ice. Its survey will help pave the way for a new era of human missions to the lunar surface and will bring us a step closer to developing a sustainable, long-term robotic and human presence on the Moon as part of the Artemis program.",
                title: "NASA Moon Rover Books Ride to the Moon",
                photographer: "NASA Ames Research Center",
                location: "NASA Ames Research Center",
                nasa_id:
                  "ARC-20200610-AAV3276-VIPER-CLPSAnnounce-RptrPkg-NASAWeb-1080p",
                media_type: "video",
                keywords: [
                  "nasa",
                  "ames research center",
                  "viper",
                  "rover",
                  "moon",
                  "moon rover",
                  "science",
                  "space",
                  "spacecraft",
                  "robot",
                  "robotics",
                  "nisv",
                  "astobotic",
                  "griffin",
                ],
                date_created: "2020-06-10T00:00:00Z",
                description_508:
                  "A narrated story about VIPER, NASA's new water-seeking robot, who will be landed on the Moon by Astrobotic's Griffin lander",
                center: "ARC",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/video/ARC-20200610-AAV3276-VIPER-CLPSAnnounce-RptrPkg-NASAWeb-1080p/ARC-20200610-AAV3276-VIPER-CLPSAnnounce-RptrPkg-NASAWeb-1080p~thumb.jpg",
                rel: "preview",
                render: "image",
              },
              {
                href: "https://images-assets.nasa.gov/video/ARC-20200610-AAV3276-VIPER-CLPSAnnounce-RptrPkg-NASAWeb-1080p/ARC-20200610-AAV3276-VIPER-CLPSAnnounce-RptrPkg-NASAWeb-1080p.srt",
                rel: "captions",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001857/collection.json",
            data: [
              {
                album: ["Test"],
                center: "GSFC",
                title: "New Moon",
                keywords: [
                  "New Moon",
                  "moon",
                  "nasa",
                  "lunareclipse",
                  "lro",
                  "lundar",
                  "goddardspaceflightcenter",
                ],
                location: "Greenbelt, MD",
                nasa_id: "GSFC_20171208_Archive_e001857",
                date_created: "2017-12-08T00:00:00Z",
                media_type: "image",
                description:
                  'New Moon. By the modern definition, New Moon occurs when the Moon and Sun are at the same geocentric ecliptic longitude. The part of the Moon facing us is completely in shadow then. Pictured here is the traditional New Moon, the earliest visible waxing crescent, which signals the start of a new month in many lunar and lunisolar calendars.  This marks the first time that accurate shadows at this level of detail are possible in such a computer simulation. The shadows are based on the global elevation map being developed from measurements by the Lunar Orbiter Laser Altimeter (LOLA) aboard the Lunar Reconnaissance Orbiter (LRO). LOLA has already taken more than 10 times as many elevation measurements as all previous missions combined.  The Moon always keeps the same face to us, but not exactly the same face. Because of the tilt and shape of its orbit, we see the Moon from slightly different angles over the course of a month. When a month is compressed into 12 seconds, as it is in this animation, our changing view of the Moon makes it look like it\'s wobbling. This wobble is called libration.  The word comes from the Latin for &quot;balance scale&quot; (as does the name of the zodiac constellation Libra) and refers to the way such a scale tips up and down on alternating sides. The sub-Earth point gives the amount of libration in longitude and latitude. The sub-Earth point is also the apparent center of the Moon\'s disk and the location on the Moon where the Earth is directly overhead.  The Moon is subject to other motions as well. It appears to roll back and forth around the sub-Earth point. The roll angle is given by the position angle of the axis, which is the angle of the Moon\'s north pole relative to celestial north. The Moon also approaches and recedes from us, appearing to grow and shrink. The two extremes, called perigee (near) and apogee (far), differ by more than 10%.  The most noticed monthly variation in the Moon\'s appearance is the cycle of phases, caused by the changing angle of the Sun as the Moon orbits the Earth. The cycle begins with the waxing (growing) crescent Moon visible in the west just after sunset. By first quarter, the Moon is high in the sky at sunset and sets around midnight. The full Moon rises at sunset and is high in the sky at midnight. The third quarter Moon is often surprisingly conspicuous in the daylit western sky long after sunrise.  Celestial north is up in these images, corresponding to the view from the northern hemisphere. The descriptions of the print resolution stills also assume a northern hemisphere orientation. To adjust for southern hemisphere views, rotate the images 180 degrees, and substitute &quot;north&quot; for &quot;south&quot; in the descriptions.  Credit: <a href="http://svs.gsfc.nasa.gov/index.html" rel="nofollow">NASA/Goddard Space Flight Center Scientific Visualization Studio</a>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASA_GoddardPix" rel="nofollow">Twitter</a></b>  <b>Join us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://web.stagram.com/n/nasagoddard/?vm=grid" rel="nofollow">Instagram</a></b>',
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001857/GSFC_20171208_Archive_e001857~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/audio/Ep294_The Moon in 4K/collection.json",
            data: [
              {
                center: "JSC",
                date_created: "2023-06-23T00:00:00Z",
                description:
                  "Gary Jordan (Host): Houston, we have a podcast! Welcome to the official podcast of the NASA Johnson Space Center, Episode 294, “The Moon in 4K.” I'm Gary Jordan, and I'll be your host today. On this podcast, we bring in the experts, scientists, engineers, and astronauts, all to let you know what's going on in the world of human spaceflight and more. The Artemis I mission, once again, reignited humanity's imagination, as Orion was able to share views of the Moon and Earth as it conducted the historic test flight. The imagery we saw from Orion was absolutely fascinating, but it really pushed the limits of Orion and the bandwidth capabilities of the Deep Space Network to deliver it from Orion back to Earth. This is the future, though! We want 4K, we want UHD (Ultra-High Definition)! But with constrained data rates in deep space, how do we get there? Luckily, we have smart people at NASA tackling this problem. The solution to 4K imagery is just as cool as the imagery itself, lasers! So to walk us through how we plan to test a laser communication system called Optical to Orion, or O2O on the upcoming Artemis II mission, we have Steve Horowitz, the O2O project manager. Set phasers to UHD, sit back, and enjoy learning about the future of deep space imagery from Steve Horowitz.    [Music]  Host: Steve Horowitz, my hero. Thank you so much for coming on Houston We Have a Podcast.    Steve Horowitz: It is my pleasure to be here. Thank you.   Host: [Laughter] I'll tell you what, in the world of public affairs, you know, I think a lot of the feedback we get and a lot of the things that we're planning for is how do we make, how do we make Artemis look better to the public? And I know we've-- there's these challenges with data rates and, and higher quality streaming when we get these incredible distances like to the Moon. But what you're working on is so precious to us here in public affairs that I am just, I can't tell you how excited I am to be talking with you, Steve. It's got to be just such a fun thing to work on.    Steve Horowitz: It really is. And it's been an exciting time and exciting time right now as we just brought down, delivered O2O to Kennedy [Space Center] last week, and it really is at a very exciting time.    Host: Oh, yeah. So it's happening. We're in the middle of it. This is fantastic. Laser communications, this is sort of what we're going to be talking about and sort of teeing up and just sort of understanding how we're able to stream and, and you're going to give us a sense of the infrastructure that we have in place and how we're going to do this. But I wonder, what got you to where you are as the O2O project manager? What, what was the career path that led you to end up on this project?    Steve Horowitz: Well, actually, I owe my NASA career to my mom.    Host: Interesting.    Steve Horowitz: When I was at Rutgers College of Engineering, my junior year, I was looking for a summer job, and my mom suggested I applied to an aerospace company that built satellites for NASA, which was not far from where she worked. I took her advice, I got the summer job, and then when I graduated, they hired me full-time. There, I worked on TIROS (Television Infrared Observation Satellite) weather satellites for NASA, for NASA Goddard [Space Flight Center], where I am now. And was, after a few years there was recruited to work at NASA. And it's been an amazing, amazing career, amazing run. And I really do owe it all to my mom.    Host: Oh, that's awesome. Of all the different ways, I guess, it sounds like maybe something that you pursued, not necessarily like, you trained or were really seeking to end up in optical communications, but it just seemed like a path that, hey, there's this opportunity and you just went for it. And then, it sounds like once you went for it, you got really invested in these kinds of technologies and, kind of what led you to end up being O2O project manager was, seems like there was something about where you were working that sort of sold you on continuing to pursue that career path.    Steve Horowitz: Yes. But the way you made that statement, I'm going to back up a little bit. After I came to NASA, and this is many years ago, I worked on a variety of missions at a variety of different jobs. From an engineer, lead engineer building hardware for various spacecraft, from an integration and test manager on the X-Ray Timing Explorer astrophysics mission; as an observatory manager on the Global Precipitation Measurement mission. So in my career at NASA, I've worked on many missions from the Earth science missions like TIROS and Global Precipitation Measurement, many heliophysics missions over the years, SOHO (Solar and Heliospheric Observatory) cluster, CHIPS (Cosmic Hot Interstellar Plasma Spectrometer), astrophysics missions, the Gamma Ray Large Area space antenna. And several future missions like Dragonfly, which will be flying a drone on the Moon of Saturn, Titan, which will be an incredible mission. As well as LISA, the Laser Interferometer Space Antenna, which will be the first space-based gravitational wave antenna. And a key part, and this little segue way right into the optical, is I worked on the Hubble Space Telescope servicing missions years ago, building hardware, replacement hardware for the Hubble. And that was very interactive with Johnson, Kennedy, the shuttle. And that is not so different in this type of relationship we have with Artemis. So coming back to Artem -- coming back to human spaceflight is really a great place to be, an exciting place to be. And optical communication, also known as laser communication or just OpCom or laser com, is a technology that is going to, and already is frankly, revolutionizing how we do communications from space. It has many advantages that I'm sure we're going to be speaking about. And the evolution of it that got us to being able to do it on Artemis II is a good story.   Host: Yes, and this is exactly why I'm so happy to have you here, is really to tell us that story and why it's revolutionary, and wanted to start, Steve, by setting some context as to how, you know, these missions, all of these missions that you just listed off, these deep space missions traditionally have used what's called the Deep Space Network and what you're talking about, what we're going to lead up to is this revolutionary design of optical communications and what that means for deep space communications. But let's first talk about the DSN. What is the DSN- Deep Space Network? How does it work? What are the technologies in place? And-- that really-- what has-- how we've run deep space missions up to this point?  Steve Horowitz: The Deep Space Network has ground stations antennas around the world and allows for communication for missions in deep space to communicate to the Earth, get their data down, and have it distributed to the appropriate locations. The challenge with DSN is -- as Artemis grows and Artemis becomes even more of a demand for the Deep Space Network time, is that the infrastructure Deep Space Network needs, will be evolving. It'll be getting bigger and more science missions with higher and higher data rates and Artemis missions. And as we continue the future and as we get ready for Moon-- for Mars, the Deep Space Network is being challenged. And so, in the next decade, some changes have to be made and, and optical comm[unication] will be part of that solution.    Host: I see. Yeah.    Steve Horowitz: Optical comm doesn't go through the Deep Space Network.    Host: Oh, it's a completely separate thing.    Steve Horowitz: We have our own ground stations, optical ground stations. They could be in the same location. But the Deep Space Network is RF, radio frequency communication, which is the primary method that spacecraft use to communicate to the Earth. Optical communication, which is near infrared wavelengths, uses lasers to communicate to the Earth. So we're separate of the DSN. And as the technology grows, gets more and more established to be more and more ground stations and more perhaps inter-satellite links that can communicate with optical communications instead it to the ground. So we, optical communications will alleviate a lot of the demand for Deep Space Network and also provide many advantages.    Host: I see. Yeah. And deep, deep space radio frequency, there are some, there are some pluses to why you would want a radio frequency, right? I think, maybe it's that it covers a wider range? Maybe it's the wavelength of radio, but traditionally there are pros to that, to using radio frequency for communications as well as cons in the fact that, you don't get quite as high of data rates.   Steve Horowitz: Correct. And we're not looking to replace radio frequency, and there's no need to replace RF communications. What we bring to the table is something different. So on Artemis II, where we're flying, there's still radio frequency communication. There's S-Band, and the S-Band is, maximum data rate is, I think, a little bit under six megabits per second. Same system that Artemis I had. Artemis I was extremely successful using only S-Band. But what we're bringing to the table with optical comm is the ability to get much more data down faster to be able to stream 4K video, which if you have a 4K television at home, similar concept in terms of resolution, but we're doing it from the lunar region, and that is a big leap forward. The current primary method for RF for high data rate is Ka-Band. Ka-Band isn't on Artemis missions. Ka-bands from the Moon could have pretty high data rate. However, as we're going to be speaking about the system for Ka-Band, RF process has more mass, more size; requires more power. And optical, which is higher data rates, more performance is much lighter, much less power. And, and it is-- doesn't require as much space on the spacecraft typically.    Host: Perfect. And it sounds like when you're talking about spacecraft, and we talk about this a lot on the podcast, but how precious mass is when you're thinking about, when you're thinking about designing a spacecraft and if there's anything that reduces mass, if there's anything that reduces space, it could be highly desired. And so, this is already seemingly attractive thing to bring to a deep space mission. But let's get into the nitty gritty, Steve, on how this works? So when it comes to laser communications, when it comes to this ability of optical communications to a deep space, spacecraft, what-- how does, how really does this work? What are the key components here?    Steve Horowitz: OK. So laser communication uses infrared light to send information rather than the traditional radio waves. A key difference is the wavelength and frequency, much higher, much faster, translating to much higher data rates for laser comm, the key thing to point out is the speed, we often talk about, it's faster with laser comm. That's often referring to the ability to get more data down quicker because of the -- bigger bandwidth, the larger bandwidth. The speed, which it goes from the lunar region to Earth, is the same as RF. They're both at the speed of light. But -- goes fast. It, more data is communicated during the, during the pass on the ground. Due to the higher frequencies used in laser comm, the amount of bandwidth is higher, as I mentioned. And that increase in bandwidth over RF results in the higher data rates. A key difference is that'll play out to why the, or how it results in so much less power being required for laser comm is the beam width of a laser comm link is much narrower than an RF link. The RF beams being wider, translates to more power, more energy, and a larger ground receiver so that the data can be sent, received, and processed, and used. Laser comm has less divergence-- the narrowest beam. And that results in more energy being captured at the ground receiver for optical comm, which is also smaller and the higher data rate. An analogy that explains it a bit is watering a plant in your backyard with a garden hose and the hose has multiple settings. The spray or shower setting, that covers a large range. And let's say you're trying to target a plant in your backyard, that spray setting covers a large range and a lot less pressure coming from the water coming out. A lot less of the water hits its target, doesn't hit the plant. A lot of that water is wasted if you will. With the jet setting, it covers a much smaller range. You're able to target the plant you're trying to water with a lot more pressure, think data rate, more pressure, more information, higher data rate, and a much narrower beam. The water is, is focuses directly on the plant. Most of the water hits its target because most of the water hits its target, or with laser comm, because more of the beam hits the antenna, less energy is required. And with Ka, the current high-definition system, from the lunar region, the divergence, the beam that hits the Earth is about 6,000 kilometers, about half the diameter of the Earth is how large the RF signal is that hits the Earth. With laser comm from the lunar region with O2O, it's six kilometers. 6,000 versus six kilometers. So much more of the information is hitting the antenna. And that has a lot-- that results in less energy. The less energy means, results also in less mass and less mass is, as you were saying, there's not a project manager, scientists, or anybody in the space biz who, if you tell them that you can give them, give some mass back to their project, every one of them would be thrilled.    Host: [laughter] That's right. Yeah. I think it sounds when you're describing it, it makes so much sense. Less mass, higher transmission, less energy used. There's a lot of pluses here. I love the analogy that you said of the garden hose. I know exactly what you're talking about, the shower or widespread setting versus the jet setting. And I think on that analogy, the thing that comes to mind is, I'm hearing a lot of, you know, plus, plus, plus there. Here's why optical is so, is so great. I think the -- the thing that naturally to me comes to mind as a challenge for optical is accuracy, right? When you're, if you're widespread, if you have that widespread setting, you can cover a lot of ground and you don't necessarily need to aim that hose as accurately. But I know if you're, if you want to use a jet stream and you, and you want to point at a plant, sometimes you don't hit it at first. Sometimes it kind of goes off to the side. Is there challenges with orientation, with accuracy? Is there anything that needs to be considered because it doesn't have such a widespread area to send messages? Are there anything, any kind of concerns or challenges there when it comes to laser communications?    Steve Horowitz: Great question. And it, and you hit the nail on the head. Pointing is very challenging. With the Ka system that covers 6,000 kilometers when it hits the Earth from the lunar region, well, it's, a lot easier to hit, to hit the antenna. So pointing is a pretty big deal. And on O2O, we developed a, a really impressive system for the pointing. So we have gimbals with the optical module of O2O. The, the telescope has gimbals on it that point to space, that point the optical module toward the Earth, that is a course pointing system, as we call it, not good enough for what we need to do. We also have a fine pointing system using fast-steering mirrors that are able to detect, interpret jitter from the spacecraft, and jitter being this motion induced for whatever reason on the spacecraft to, to detect it and compensate for it, to hold it steady to point at the Earth from the lunar region, pretty far. And making it even more-- harder, if you will, is that jitter with human beings on the spacecraft, with the astronauts crew moving about doing things, exercising, giving each other high fives, causes more jitter. And the system in O2O is really a smart system that's able to compensate even for the jitter caused by the astronauts and be able to hold steady the pointing and implementing the use of the fast-steering mirrors and hold steady the pointing and hit our ground stations.    Host: Awesome. Yeah, I definitely want to go into a lot of the key technologies here too, and to understand just what has to all happen, more so on this pointing thing when it comes to, you know, you just talk about point, pointing being a challenge and how the O2O system sort of compensates for that. Operationally, is there any considerations for optical communications? And what I mean by that is, you know, when I'm thinking about a spacecraft like Orion, you have considerations like pointing where you need to orient Orion a certain way to make sure the gimbals, to make sure that telescope with optical communications is pointing the right way. It's pointing towards Earth. But you also have to compete against things like solar considerations and the solar arrays and maybe thermal constraints with keeping a single area of Orion facing the sun for X amount of time. Are -- how do the operations work with the system you are designing and finding the right moments to say, “hey, OK, we're going to point towards this for optical communications, but then we have to turn away because, you know, we have thermal constraints, or we have to point the solar arrays a certain way.” Are you dancing with the operations between optical communications and some of the other systems on board Orion?    Steve Horowitz: Sure. Those are considerations that have to be taken into account. And we, most of ours have been accommodated during the design phase, not so much, not only the design of O2O, but where we're being placed on Orion. And so, where we're pointing and that Orion flies tail to sun, that we aren't going to have a lot of those problems operationally, because we, it was accounted for ahead of time. And in some ways, we also lucked out that we don't have operational constraints that way. Thermo's always a consideration as well. And if we operate too long in a certain configuration we could, we get warmer and warmer and warmer. And that's an operational- not a constraint because it was designed and tested and it, and there won't be any problems, but it's an operational consideration that we're, that we're addressing.    Host: That's huge, Steve, because what you're talking about, and I'm thinking about the trajectory of Artemis II. You're really just swinging around the Moon, if you're pointing tail to sun for most of it. You know, with a couple considerations about the thermal, which you talk about, you addressed it in the testing, you can have a pretty continuous stream of optical communication through, if I'm not mistaken, most of the Artemis II mission.  Steve Horowitz: We have two ground stations on Artem -- on op-- the two optical ground stations for O2O.   Host: OK.  Steve Horowitz: They are in target, they're both in the continental United States, and they are in view ten hours a day. So we could operate up to ten hours a day on each of the ten-- each of the days of the ten-day mission.    Host: I see. OK. So not so much a matter of orienting Orion the right way, it's more about the ground station infrastructure and the Earth itself has to be, it has to be having those ground stations pointing towards, you know, Orion and the Moon, in order to talk to it. You don't have around the globe ground stations for optical quite yet.    Steve Horowitz: Correct. These are dedicated, developed for O2O and there's two of them. One is in White Sands complex in New Mexico. The other is at the Table Mountain facility, which is operated by the Jet Propulsion Lab[oratory] in California.    Host: OK. White Sands and in California. We've, I think, talked a lot about the key technologies for O2O and talking about, you know, sort of how this works, but it sounds like there is this telescopic infrastructure on Orion. It is the laser communications on the spacecraft itself that's sending the lasers down to Earth. And then you have the ground stations. And you talked about the gimbal assembly to sort of help with the jitters and help maximize the pointing flexibility. Are there other key technologies to what fully encompasses O2O? Or does that capture most of it?    Steve Horowitz: No, so now let's get into the, a little more of the guts of what an optical communication system is, what laser comm is.  Host: Yeah.  Steve Horowitz: So a laser comm or optical comm terminal comprises of the optical module and optical module on O2O is defined as the optical telescope, the gimbals, the fast-steering mirrors, electronics and such. We also have an optical modem, which converts the electrical signal into an optical signal as, as a modem for distribution. And also returning it that way. We have a computer, a controller for commanding and so forth. We have power, supplies and so and such. The key, the heart is often considered the-- the controller is more of a computer, not advanced technology for O2O [inaudible]. The modem is rather impressive. And the optical module is rather impressive. So the key parameters of an optical communication system, are often frequency, the modulation scheme inside the modem, the aperture size of O2O is ten centimeters and the range where it's going to be pointing. As we talked about optical communication links require high-pointing accuracy. The aperture, how that works is, so when you're transmitting, energy passes through the optical aperture and forms the narrow beam, the very, in a relative sense, very narrow beam. The larger the aperture, the narrower the beam. And then that creates a higher power density at the receiver for the given range. Now, pointing is important, but that’s once you find each other. A key element of this whole process is having the ground terminal and the space terminal find each other so they can communicate. And with these very narrow beams, that's a little harder. So the approach is sending a beacon at-- which is much more diverse, it spreads out much more, that’s not high data rate. And once the beacon is found, the space terminal on the ground will lock on each other, and then we can implement the higher data rates. And this is scalable. Talk about future deep space. All this is scalable for beyond lunar orbits and, you know, even Mars.    Host: Oh, it's scalable in terms of, I guess the tech, the technology size, maybe, you know, the telescopic assembly you have on Orion can be scaled up. But then, are you also referring to ground station infrastructure and having just more coverage?    Steve Horowitz: There's various trades. So if you, the further away you are, you have to make certain you have enough signal to reach the ground. Each mission has its own requirements in terms of data rate transmission. But you can have a larger telescope, you could have more mass as needed, but some missions require less data rate, a lower data rate. And that could often compensate for the need for additional mass to have a larger telescope. But all those trades -- are specific to a mission and will result in being able to do that from further distances.    Host: One thing that's coming to mind, I'm thinking about the way that the, that this optical lens on Orion communicates with a ground station and you talked about, I think you said a six-kilometer spread if I'm quoting you correctly.   Steve Horowitz: Correct.  Host: And so, I'm thinking that's not very wide and, and the Earth is constantly rotating. So does that mean that, you know, you talked about this, this sort of beacon technology, once you find it, there's almost this, the gimbal assembly, the telescope assembly on Orion actually tracks the ground station as Earth moves, as Earth rotates. It's pointing towards those ground stations for that ten hours that you actually have a view of the ground stations. It's actually like the gimbal assembly is actually moving to make sure it's got that accuracy.   Steve Horowitz: Correct. And not only is the Earth moving; Orion is moving.  Host: Oh.  Steve Horowitz: That closed loop feedback is impressive to lock on and stay locked on.    Host: Yeah. That, this is sort of what I was alluding to with that accuracy with these, yeah. We just, you have the Earth moving, you have Orion moving, there's a lot at -- there's a lot in place. And so…    Steve Horowitz: You know, but, Gary, can I also mention, you mentioned some of the challenges.  Host: Yeah.  Steve Horowitz: There was a challenge that we didn't get to -- that's not a space terminal challenge, challenge, but more of a ground terminal challenge, or at least a system challenge, is that weather, clouds affect the optical beam.   Host: Oh, interesting.   Steve Horowitz: And that has to be accounted for. So O2O has two optical ground stations in locations that are weathered decorrelated. The likelihood, if one area has a, a cloudy -- clouds, it's very unlikely that the other would have clouds as well that would impact the transmission. Also, the ground stations are often built the top of mountains as there's minimal dust and less atmospheric turbulence at, at the top of a mountain. And as many people have experienced hiking or otherwise, it's quite common to have a nice sunny day at the top of a mountain where midpoint down and below its, it's cloudy or rainy, rainy. So that's one of the methods we're able to get around that concern about clouds and the atmospheric disturbances that would disrupt the laser signal. And depending on the mission and its requirements for data and how much data, how much latency, how real-time versus how much storage the data can -- that can be allowed, there's, you could wait on certain missions to send it down another time. But in the future, with expected advances in inter-satellite networking and as well as, the potential development of an extensive network of laser comm, OpCom ground stations, there's going to be even more solutions to route data around the weather. And, and that would, and so for O2O, that's how we're doing it. We have two ground stations that are weather decorrelated. Other missions based on their needs have adaptive optics. And adaptive optics on the ground terminal reduces the effects of atmospheric turbulence on the data. So adaptive optics use a sensor to measure the distortion from the clouds to the electromagnetic signal coming from the spacecraft. The distortion is measured, and it gets sent through a deformable mirror that changes its shape to take out the aberration induced by the atmosphere. And the result is a nice pristine signal. O2O doesn't require that because of our modulation approach of being post-position modulation. Other missions, implement adaptive optics quite regularly. So, it's another way to address those challenges.    Host: That's awesome. And that solution is so inventive too, to deal with weather. But it sounds like you guys have an understanding of what the requirements are specifically for Artemis II and what you'll need, and have, you know, have these different ground stations in place in order to accommodate that. O2O, I think, is something that, you know, you guys have been working on it for a long time to have this sort of capability and there are forward paths to see what this is going to be. But this O2O, is this, is it fair to say this is, this is a -- Artemis II at least, is going to be a key, not only is this capability being put in place so that we can actually use it, but in and of itself, this is a technology demonstration for what deep space communications can be in the future?   Steve Horowitz: Well, that's a good question because we are demonstrating something, but we're not demonstrating the ability to do laser comm from the lunar region. Laser comm from the lunar region was demonstrated in 2013 on a mission called the Lunar Laser Communication Demonstration, LLCD. And that was on a science mission called LADEE (Lunar Atmosphere and Dust Environment Explorer) that went to the Moon. And the laser, lunar laser communications demonstration consisted of a space terminal on the LADEE spacecraft and three ground terminals on the Earth. And they demonstrated it was possible to transfer high data rate; 622 megabits per second of data from the Moon with a space terminal that weighs less, uses less power, and occupies less space than a comparable system. Now, what an O2O is demonstrating is not the ability to do laser comm from the Moon, but to demonstrate operational utility of a laser comm system on a lunar human crewed mission. And that is a big deal. So LLCD was almost like separate of the spacecraft of the LADEE mission. It didn't get involved with LADEE data, it sent its own data to demonstrate the, how laser comm could be done. And it was extremely successful. But O2O is integrated, intertwined with Artemis II, with Orion data, and we'll be demonstrating that. So what is operational utility? That's where we really get into some of the real benefits of O2O. We're not just demonstrating -- LLCD demonstrated, you can send a lot of data at these high rates from the Moon on an OpCom system. But we're, as I mentioned, intertwined with the, with the architecture for the communication architecture on Artemis II. So Artemis II brings a lot more video uploads, downloads, file transfers, video conferencing. The life support system increases the amount of data that is being generated on Artemis II versus even Artemis I. And on the S-Band system alone, there's a lot of, there's certain limitations about how much data can get down. So on day one of Artemis II, we expect about 250 gigabits of data. And you know, that's quite a bit? And about 300 gigabits of data totaled by the end of the mission. With S-Band alone, Orion is limited to downloading approximately seven gigabits of data per day. And a 10-day mission, seven gigabits per data, that's 70 gigabits out of 300. That means a lot. The far majority of data is still on board for analysis on the ground after the mission. And Artemis I, that worked fine. And, but what we're bringing to the table is the ability to bring down so much more of that data to the Earth during the mission for scientists and engineers to be able to look at it, analyze it, and so forth. To give you a sense of how, of how fast we're able to get the data down, with just one hour of optical comm at our nominal data rate of 80 megabits per second, Orion could downlink approximately 36 gigabits of data per day. That's six times more than the S-Band example. All the data would be downloaded before the end of the mission. At our highest data rate of 270-- I'm sorry, 260 megabits per second, Orion could download in the one hour per day; 117 gigabits. And that's almost 20-time increase. All the data could be downloaded on the Earth by during day four. And if we had two one-hour sessions, well, now we're in day three. And that is an amazing increase and practical sense of the capability of, of O2O.    Host: Yeah. Real-time, real-time data. All the data you could possibly want on board Orion as fast as you could possibly get it. That's incredible. And then on top of that, you know, now you're talking about expanding capabilities too, that not just, not just receiving data, but being able to push more through because of the higher bandwidth like 4K. And that, I know that's something for us on, on the public affairs side is highly sought after, we can get crystal clear, beautiful images of humans in deep space, more and higher streaming capabilities than we've ever had possible before.    Steve Horowitz: That is the capability we're enabling. And for anyone who's had a 4K TV, and many people have them now, but not as many programs, all the old programs aren’t in 4K. So if you have a great TV, you often don't even see the 4K, but when you do, it is really wow technology. And with my 4K TV, especially the Artemis launch, which was Artemis I launch, which was live, that was 4K, and that was fantastic. And I can't wait for seeing how the astronauts, how the Johnson Space Center, how the whole Artemis program is going to use the capability of optical comm of the 4K being sent to Earth.    Host: Yeah. We're talking about it right now. We're trying to take full advantage of this capability that you guys have worked so hard on and prepared for. And that's really where I want to go next is, you know…     Steve Horowitz: It really is a giant leap in communication technology to having optical from the Moon at these rates, and it's going to be applicable. It's going to be there for NASA's journey to the Moon and beyond.    Host: Yes. And you guys have worked really hard to get us there, right? And so that's where I wanted to go to next was, O2O, you know, we talked about what are the different components of O2O, and you actually alluded to in the very beginning of our conversation, Steve, you alluded to the fact that, it's, that your hardware is already at Kennedy. And so, what are the, what process, what is the timeline here of O2O in terms of the development of the technology, and the testing of the technology to make sure that we are ready for Artemis II?    Steve Horowitz: Sure. So prior to shipping it from the Massachusetts Institute of Technology, Lincoln Laboratory, who's our partner in this, and was our partner on LLCD and several other missions in developing optical communication terminals for space. Prior to shipping it to Kennedy, it went through an extensive set of tests. Not, some of which, not different from a typical space development program of environmental testing, vibration testing, thermal vacuum testing, and so forth. But being exercising a variety of different methods, different capabilities to see its capabilities, it’s new, to make certain one that met well, the requirements. But also, if we stressed it, if we put this at one end and, and challenge it in another, how would it work? And it did great. It did great. And it was thrilling to get the phone call that it was on the truck being shipped to Kennedy last week. And it arrived -- it arrived unharmed, if you will. And, but immediately, we, the first thing we do is take it out of the boxes and make sure nothing was damaged and test, nothing was damaged in shipment. And we tested it on the bench. And so that testing is complete. We know it wasn't injured during shipment. And we got there a little bit early and we're waiting for Orion to integrate us. And that's planned for the end of the month, maybe next month, but we will be integrated onto Orion, and then we'll start doing some tests to run the data through the system on Artemis II. On Artemis, where we live, if you will, on the spacecraft is the crew module adapter, which is between the crew module and the European service module. And so, our hardware will be put there for the integration, and we'll do our testing. And then after that, you know, we're there with Orion, as Orion continues through its test program, getting ready for launch. But that's just one element of the testing program to make certain everything's going to work. There are several mission readiness tests, as we call them. We have five of them, and they can culminate in kind of the proof is in the pudding test of pulling together the ground terminals, the ground optical terminals, which are-- have their own test programs so forth. As well as, running data from Orion to O2O to the ground to demonstrate all these different scenarios that it works with Orion, not just, you know, we already know it works at the lab at MIT Lincoln Laboratories, but we'll be demonstrating on these mission readiness tests that works with Orion. And as the space business as such, we did a lot of preparing for those tests while the space terminal was still at MIT, Lincoln Laboratory where we developed the planning and the procedures for the mission readiness test and dry ran them multiple times to make certain everything is flushed out as best as possible. That we, that we corrected everything we needed to do and test planning, so that when we do the MRTs (Mission Readiness Test) on with Orion, they're going to go as successfully as possible and we're going to learn from them, of course. And we'll take those lessons and include into our operational planning.    Host: Yeah. All of this sort of leading to a high-level of confidence that when you start up for Artemis II in-flight and you start those first, you know, booting the system in space and testing that out, that you have the highest-level confidence based on all these preparations that this thing is going to work when you're in space. But I'm sure you have that, right? As soon as, as soon as Artemis II is in space, likely one of the first steps for you and your team is to boot the system on and to test out the communications and make sure it's operating functionally before you start getting into this more of an operational mode where you're going to be sending, you know, high, high data rates down, back down to Earth. You have that-- that's probably one of the first steps on Artemis II.     Steve Horowitz: Correct. We do our checkout starting on day one…  Host: Day one.  Steve Horowitz: …before, before Orion heads off to the Moon. So we start on day one, maybe finished on day two, and then, we're ready to go. And getting-- and ready to go with the operation really is a team effort, not just of Goddard Space Flight Center, where I work, and MIT Lincoln Laboratories, but it's-- there's five major systems elements, in a sense. There's the Orion spacecraft element, and then there's the space terminal. Space terminal lives on Orion. Orion communicates to the Mission Control Center directly through S-Band like on Artemis I. The Mission Control Center at the Johnson Space Center is also where we have our laser comm space terminal console, a Johnson person there who is operating for us in terms of communicating with Orion for O2O. The other side though is the data from O2O gets sent directly to the White Sands or Table Mountain facility in California. It gets sent through the, what we call the ground data element, which then, we'll send it to the MCC, the Mission Control Center at Johnson. And through this method, that's how the data is just data from end, from a mission, where it can be used almost seamlessly from the, by the users. In a sense of where O2O, where optical communication is going as being part of Artemis or future missions in science and human spaceflight. The, you know, the idea of like with your cell phone, when you turn it on, you really don't care how your call went through to the person you're calling, which tower it went to, or how it got there and so forth. Or whether the person is on the same plan as yours. You just care that it's going to get there. And that's where we're heading, where this is less of a demonstration. We're not demonstrating OpCom anymore, we're using it. And all the organizations are, you know, everyone -- we're to get all the data down with those five elements of the spacecraft of the space terminal. The ground system and the MCC people. Everybody is using the same sheet of music, but everyone has their own instrument to play. And we've been practicing and training, not just by ourselves, but with our partners at the -- the other parts of the Orion and Artemis program.    Host: Yeah. And it's, what, what you're alluding to, Steve is, is huge because, you know, everything that you're preparing for to demonstrate this capability for human spaceflight missions, I think you’re saying it very clearly is that the intention here is to have this be a part of future missions. It sounds like a really attractive thing to engineers, to mission controllers, to everybody to have data so fast. To us in public affairs to have high data rates and, and high-definition video, and audio from future Artemis missions, the capability to be able to stream, you know, people walking on the Moon in 4K. I mean, that's something that I think we ultimately, with this demonstration, ultimately is something we all want to build towards, is a future where optical communications is very much integrated in deep space missions.    Steve Horowitz: Yeah. And it will also in addition to the data communication, whether it's science or human space program, with the astronauts having these capabilities improves the quality of life on these long space missions. And as we strive to put humans on Mars, it's imperative that we have a communication system that could support the quality of life the astronauts are experiencing. You know, one way of saying it, is we're enabling communication capabilities on the ground that they could watch the Super Bowl perhaps, and we're talking long-term planning from far away. They, it, where they could be part of certain activities on Earth that weren't available to astronauts in the past. And, you know, one of the things I often think about is how FaceTime revolutionized for me, my experience when I go on business trips, I feel less alone. I call up my kids and have video conferences, video conversations with my kids, Alex, and Sophia, and that's where this is going. This is what we're going to be able to give to future astronauts that perhaps they'll be able to do the same and virtually tuck in their kids at night and space will feel much closer to home.   Host: Steve, I think, you know, as, as, as much as you've brought to the table today in terms of talking about the systems and the engineering behind this capability, I think, it's just as important what's coming through from you is your passion for this project and what it means, you know? Being able to, that human connection is so important for deep space missions. You are at the infancy here of something greater on how future astronauts on Mars can talk to their children. And, you know, it's all being worked right now as part of Artemis that leads us to that future. And it's got to feel good, Steve to be a part of something so grand.    Steve Horowitz: Thank you. Thank you. It really does feel good. The team here at Goddard, MIT, Johnson, Kennedy have been amazing. And it's great to work with such amazing people.    Host: Yeah. I have a lot of passionate people, too. Steve Horowitz, thank you so much for coming on Houston We Have a Podcast. I was so looking forward to this. And Steve, you did not disappoint. It was awesome. So, so informative on what capabilities are going to be shown on Artemis II that leads us to what human spaceflight, human deep spaceflight is going to be in the future. It's absolutely incredible. So I appreciate you taking the time to chat with us today. Thank you so much.    Steve Horowitz: Thank you. My pleasure.    [Music]  Host: Hey, thanks for sticking around today. I had so much fun talking with Steve Horowitz about laser communications, about O2O. Such an exciting project and a lot of capabilities that are going to impact how we think about deep space communications and deep space missions from now on. It's very exciting; all happening on Artemis II. Make sure to check out NASA.gov for the latest and the latest, greatest updates on O2O as well as Artemis II. You can also check out many of our NASA podcasts we have across the whole agency at NASA.gov/podcasts. You can find us there and listen to any of our episodes in no particular order. If you do want to talk to us or shoot us a suggestion, we are on the NASA Johnson Space Center pages of Facebook, Twitter, and Instagram. Just use the hashtag #AskNASA to do so and make sure to mention is for us at Houston We Have a Podcast. This episode was recorded on June 6th, 2023. Thanks to Will Flato, Pat Ryan, Justin Herring, Heidi Lavelle, Abby Graf, Belinda Pulido, Jaden Jennings, Laura Rochon, and Katie Schauer. And of course, thanks again to Steve Horowitz for taking the time to come on the show. Give us a rating and feedback on whatever platform you're listening to us on and tell us what you think of our podcast. We'll be back next week. ",
                description_508: "Full transcript in description",
                keywords: [
                  "Johnson",
                  "Space",
                  "Center",
                  "JSC",
                  "Houston",
                  "Podcast",
                  "The Moon",
                  "Laser Communications",
                ],
                media_type: "audio",
                nasa_id: "Ep294_The Moon in 4K",
                title: "HWHAP Ep294 The Moon in 4K",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA06640/collection.json",
            data: [
              {
                center: "JPL",
                title: "Rubble Moon?",
                nasa_id: "PIA06640",
                date_created: "2005-05-03T12:50:25Z",
                keywords: ["Epimetheus", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Rubble Moon?",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Rubble Moon?",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA06640/PIA06640~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA10522/collection.json",
            data: [
              {
                center: "JPL",
                title: "Fingerprints of the Moons",
                nasa_id: "PIA10522",
                date_created: "2008-11-27T13:50:53Z",
                keywords: ["S Rings", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Fingerprints of the Moons",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Fingerprints of the Moons",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA10522/PIA10522~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA06577/collection.json",
            data: [
              {
                center: "JPL",
                title: "January Moon",
                nasa_id: "PIA06577",
                date_created: "2005-02-03T13:50:00Z",
                keywords: ["Janus", "Cassini-Huygens"],
                media_type: "image",
                description_508: "January Moon",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "January Moon",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA06577/PIA06577~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA10481/collection.json",
            data: [
              {
                center: "JPL",
                title: "Gathering of Moons",
                nasa_id: "PIA10481",
                date_created: "2008-10-01T12:50:34Z",
                keywords: ["S Rings", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Gathering of Moons",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Gathering of Moons",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA10481/PIA10481~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA09731/collection.json",
            data: [
              {
                center: "JPL",
                title: "Moons that Share",
                nasa_id: "PIA09731",
                date_created: "2007-09-19T12:50:10Z",
                keywords: ["S Rings", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Moons that Share",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Moons that Share",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA09731/PIA09731~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA06595/collection.json",
            data: [
              {
                center: "JPL",
                title: "Flock of Moons",
                nasa_id: "PIA06595",
                date_created: "2005-03-01T13:53:21Z",
                keywords: ["Saturn", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Flock of Moons",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Flock of Moons",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA06595/PIA06595~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA08207/collection.json",
            data: [
              {
                center: "JPL",
                title: "Moons of Interest",
                nasa_id: "PIA08207",
                date_created: "2006-06-26T12:50:15Z",
                keywords: ["Enceladus", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Moons of Interest",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Moons of Interest",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA08207/PIA08207~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA11492/collection.json",
            data: [
              {
                center: "JPL",
                title: "Belittled Moon",
                nasa_id: "PIA11492",
                date_created: "2009-05-14T12:50:15Z",
                keywords: ["Epimetheus", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Belittled Moon",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Belittled Moon",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA11492/PIA11492~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA10556/collection.json",
            data: [
              {
                center: "JPL",
                title: "Moons in a Row",
                nasa_id: "PIA10556",
                date_created: "2009-01-14T13:50:51Z",
                keywords: ["S Rings", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Moons in a Row",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Moons in a Row",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA10556/PIA10556~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA11455/collection.json",
            data: [
              {
                center: "JPL",
                title: "Brotherly Moons",
                nasa_id: "PIA11455",
                date_created: "2009-03-24T12:50:29Z",
                keywords: ["S Rings", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Brotherly Moons",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Brotherly Moons",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA11455/PIA11455~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA06527/collection.json",
            data: [
              {
                center: "JPL",
                title: "Oddball Moon",
                nasa_id: "PIA06527",
                date_created: "2004-11-24T13:57:00Z",
                keywords: ["Hyperion", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Oddball Moon",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Oddball Moon",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA06527/PIA06527~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA09744/collection.json",
            data: [
              {
                center: "JPL",
                title: "Cluster of Moons",
                nasa_id: "PIA09744",
                date_created: "2007-10-08T12:50:37Z",
                keywords: ["S Rings", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Cluster of Moons",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Cluster of Moons",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA09744/PIA09744~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA07603/collection.json",
            data: [
              {
                center: "JPL",
                title: "Virgil Moon",
                nasa_id: "PIA07603",
                date_created: "2005-10-07T12:50:04Z",
                keywords: ["Dione", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Virgil Moon",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Virgil Moon",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA07603/PIA07603~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA08946/collection.json",
            data: [
              {
                center: "JPL",
                title: "Emergent Moons",
                keywords: ["S Rings", "Cassini-Huygens"],
                nasa_id: "PIA08946",
                date_created: "2007-05-23T12:50:18Z",
                media_type: "image",
                description_508: "Emergent Moons",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Emergent Moons",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA08946/PIA08946~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA06603/collection.json",
            data: [
              {
                center: "JPL",
                title: "Little Moons",
                nasa_id: "PIA06603",
                date_created: "2005-03-11T13:55:00Z",
                keywords: ["Janus", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Little Moons",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Little Moons",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA06603/PIA06603~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA08216/collection.json",
            data: [
              {
                center: "JPL",
                title: "The Moons are the Stars",
                nasa_id: "PIA08216",
                date_created: "2006-07-07T12:50:30Z",
                keywords: ["S Rings", "Cassini-Huygens"],
                media_type: "image",
                description_508: "The Moons are the Stars",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "The Moons are the Stars",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA08216/PIA08216~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA10473/collection.json",
            data: [
              {
                center: "JPL",
                title: "White Moon",
                nasa_id: "PIA10473",
                date_created: "2008-09-19T12:50:31Z",
                keywords: ["Enceladus", "Cassini-Huygens"],
                media_type: "image",
                description_508: "White Moon",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "White Moon",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA10473/PIA10473~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA10401/collection.json",
            data: [
              {
                center: "JPL",
                title: "Distant Moon",
                nasa_id: "PIA10401",
                date_created: "2008-06-11T12:50:31Z",
                keywords: ["Tethys", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Distant Moon",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Distant Moon",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA10401/PIA10401~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA05435/collection.json",
            data: [
              {
                center: "JPL",
                title: "A Halo of Moons",
                nasa_id: "PIA05435",
                date_created: "2004-09-06T12:58:00Z",
                keywords: ["Saturn", "Cassini-Huygens"],
                media_type: "image",
                description_508: "A Halo of Moons",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "A Halo of Moons",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA05435/PIA05435~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA09000/collection.json",
            data: [
              {
                center: "JPL",
                title: "Skewered Moon",
                nasa_id: "PIA09000",
                date_created: "2007-08-07T12:50:03Z",
                keywords: ["Dione", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Skewered Moon",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Skewered Moon",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA09000/PIA09000~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA11477/collection.json",
            data: [
              {
                center: "JPL",
                title: "Bothersome Moon",
                nasa_id: "PIA11477",
                date_created: "2009-04-23T12:50:49Z",
                keywords: ["S Rings", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Bothersome Moon",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Bothersome Moon",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA11477/PIA11477~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA06066/collection.json",
            data: [
              {
                center: "JPL",
                title: "Battered Moon",
                nasa_id: "PIA06066",
                date_created: "2004-06-12T21:11:20Z",
                keywords: ["Phoebe", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Battered Moon",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Battered Moon",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA06066/PIA06066~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA07767/collection.json",
            data: [
              {
                center: "JPL",
                title: "Season of Moons",
                nasa_id: "PIA07767",
                date_created: "2005-12-06T19:25:07Z",
                keywords: ["Saturn", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Season of Moons",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Season of Moons",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA07767/PIA07767~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA11480/collection.json",
            data: [
              {
                center: "JPL",
                title: "Moons by the Bunch",
                nasa_id: "PIA11480",
                date_created: "2009-04-28T12:45:49Z",
                keywords: ["S Rings", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Moons by the Bunch",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Moons by the Bunch",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA11480/PIA11480~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA07615/collection.json",
            data: [
              {
                center: "JPL",
                title: "Switcharoo Moons",
                nasa_id: "PIA07615",
                date_created: "2005-10-25T12:50:13Z",
                keywords: ["S Rings", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Switcharoo Moons",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Switcharoo Moons",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA07615/PIA07615~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA10512/collection.json",
            data: [
              {
                center: "JPL",
                title: "Moon Spot",
                nasa_id: "PIA10512",
                date_created: "2008-11-13T13:50:46Z",
                keywords: ["Tethys", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Moon Spot",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Moon Spot",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA10512/PIA10512~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA07679/collection.json",
            data: [
              {
                center: "JPL",
                title: "Moons in Perspective",
                nasa_id: "PIA07679",
                date_created: "2006-01-20T13:50:23Z",
                keywords: ["Saturn", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Moons in Perspective",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Moons in Perspective",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA07679/PIA07679~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA09760/collection.json",
            data: [
              {
                center: "JPL",
                title: "Moon Harvest",
                nasa_id: "PIA09760",
                date_created: "2007-10-30T12:50:49Z",
                keywords: ["S Rings", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Moon Harvest",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Moon Harvest",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA09760/PIA09760~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA09879/collection.json",
            data: [
              {
                center: "JPL",
                title: "Lighthouse Moon",
                nasa_id: "PIA09879",
                date_created: "2008-04-14T12:50:45Z",
                keywords: ["Pan", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Lighthouse Moon",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Lighthouse Moon",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA09879/PIA09879~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA07682/collection.json",
            data: [
              {
                center: "JPL",
                title: "Speck of a Moon",
                nasa_id: "PIA07682",
                date_created: "2006-01-25T13:50:01Z",
                keywords: ["Atlas", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Speck of a Moon",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Speck of a Moon",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA07682/PIA07682~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA06600/collection.json",
            data: [
              {
                center: "JPL",
                title: "In the Moon Wake",
                nasa_id: "PIA06600",
                date_created: "2005-03-08T13:55:00Z",
                keywords: ["Saturn", "Cassini-Huygens"],
                media_type: "image",
                description_508: "In the Moon Wake",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "In the Moon Wake",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA06600/PIA06600~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA09853/collection.json",
            data: [
              {
                center: "JPL",
                title: "Confining Moons",
                nasa_id: "PIA09853",
                date_created: "2008-03-07T13:50:29Z",
                keywords: ["S Rings", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Confining Moons",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Confining Moons",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA09853/PIA09853~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA10569/collection.json",
            data: [
              {
                center: "JPL",
                title: "It Full of Moons!",
                nasa_id: "PIA10569",
                date_created: "2009-02-02T13:50:55Z",
                keywords: ["S Rings", "Cassini-Huygens"],
                media_type: "image",
                description_508: "It Full of Moons!",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "It Full of Moons!",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA10569/PIA10569~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA06501/collection.json",
            data: [
              {
                center: "JPL",
                title: "Moons and Gaps",
                nasa_id: "PIA06501",
                date_created: "2004-10-19T12:57:00Z",
                keywords: ["Saturn", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Moons and Gaps",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Moons and Gaps",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA06501/PIA06501~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA11503/collection.json",
            data: [
              {
                center: "JPL",
                title: "Petite Moon",
                nasa_id: "PIA11503",
                date_created: "2009-05-29T12:50:15Z",
                keywords: ["S Rings", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Petite Moon",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Petite Moon",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA11503/PIA11503~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA10593/collection.json",
            data: [
              {
                center: "JPL",
                title: "Busy Moon",
                nasa_id: "PIA10593",
                date_created: "2009-03-06T13:50:15Z",
                keywords: ["S Rings", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Busy Moon",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Busy Moon",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA10593/PIA10593~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA09795/collection.json",
            data: [
              {
                center: "JPL",
                title: "Obscure Moon",
                nasa_id: "PIA09795",
                date_created: "2007-12-21T13:50:46Z",
                keywords: ["Rhea", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Obscure Moon",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Obscure Moon",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA09795/PIA09795~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA10468/collection.json",
            data: [
              {
                center: "JPL",
                title: "Disturbing Moons",
                nasa_id: "PIA10468",
                date_created: "2008-09-12T12:50:42Z",
                keywords: ["S Rings", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Disturbing Moons",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Disturbing Moons",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA10468/PIA10468~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA06550/collection.json",
            data: [
              {
                center: "JPL",
                title: "Moon Influence",
                nasa_id: "PIA06550",
                date_created: "2004-12-30T13:57:00Z",
                keywords: ["Mimas", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Moon Influence",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Moon Influence",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA06550/PIA06550~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA09864/collection.json",
            data: [
              {
                center: "JPL",
                title: "Moons on the Move",
                nasa_id: "PIA09864",
                date_created: "2008-03-24T12:50:28Z",
                keywords: ["Saturn", "Cassini-Huygens"],
                media_type: "image",
                description_508: "Moons on the Move",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "Moons on the Move",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA09864/PIA09864~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA09921/collection.json",
            data: [
              {
                center: "JPL",
                title: "Shepherd Moons",
                nasa_id: "PIA09921",
                date_created: "2007-05-01T11:00:14Z",
                keywords: ["Jupiter", "New Horizons"],
                media_type: "image",
                description_508: "Shepherd Moons",
                secondary_creator:
                  "NASA/Johns Hopkins University Applied Physics Laboratory/Southwest Research Institute",
                description: "Shepherd Moons",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA09921/PIA09921~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
          {
            href: "https://images-assets.nasa.gov/image/PIA06588/collection.json",
            data: [
              {
                center: "JPL",
                title: "String of Moons?",
                nasa_id: "PIA06588",
                date_created: "2005-02-18T13:53:00Z",
                keywords: ["Saturn", "Cassini-Huygens"],
                media_type: "image",
                description_508: "String of Moons?",
                secondary_creator: "NASA/JPL/Space Science Institute",
                description: "String of Moons?",
              },
            ],
            links: [
              {
                href: "https://images-assets.nasa.gov/image/PIA06588/PIA06588~thumb.jpg",
                rel: "preview",
                render: "image",
              },
            ],
          },
        ],
        metadata: {
          total_hits: 16438,
        },
        links: [
          {
            rel: "next",
            prompt: "Next",
            href: "http://images-api.nasa.gov/search?q=moon&page=2",
          },
        ],
      },
    });
  }),
];
