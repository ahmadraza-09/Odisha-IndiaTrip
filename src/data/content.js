import Jagannath from "../assets/jagannath-puri-temple-odisha.webp";
import GoldenTriangle from "../assets/golden-triangle.webp";
import Tribe from "../assets/Tribes-of-Odisha.webp";
import Bhitarkanika from "../assets/bhitarkanika.webp";
import Beach from "../assets/Puri-Sea-Beach.webp";
import Deoghar from "../assets/Best-Time-to-Visit-Baba-Baidyanath-Temple-deoghar.webp";
import Kolkata from "../assets/kolkata-bridge.webp";
import Konark from "../assets/konark-sun-temple.webp";
import Gangasagar from "../assets/gangasagar.webp";
import Bird from "../assets/how-do-birds-fly.webp";
import TigerReserve from "../assets/tiger.webp";
import RathYatra from "../assets/Jagannath-Rath-Yatra-Puri-Odisha-1.webp";
import Koraput from "../assets/koraput.webp";
import Bonda from "../assets/bonda.webp";
import Bhubaneshwar from "../assets/Lingaraj_temple_Bhubaneswar.webp";
import ChilikaLake from "../assets/odisha_chilika_lake.webp";
import Cuttack from "../assets/2-barabati-stadium-cuttack-odisha-city-hero.webp";
import ShaktiPeethas from "../assets/shakti-peethas.webp";
import DetoxTour from "../assets/detox-tour.webp";
import EmeraldHighland from "../assets/emerald-highlands.webp";
import KashmirOfOdisha from "../assets/kashmir-of-odisha.webp";
import VividOdisha from "../assets/vivid-odisha.webp";
import OdishaScenicRoute from "../assets/odisha-scenie-route.webp";
import KolkataGhats from "../assets/KolkataGhats.webp";
import BirajaShaktipeeth from "../assets/BirajaShaktipeeth.webp";
import TaratariniHill from "../assets/TaratariniHill.webp";
import MahendragiriPeak from "../assets/MahendragiriPeak.webp";
import TaptapaniHotsprings from "../assets/TaptapaniHotsprings.webp";
import ChandipurBeach from "../assets/chandipurbeach.webp";
import MandasaruValley from "../assets/MandasaruValley.webp";

// Eco Retreat
import BhitarkanikaRetreat from "../assets/eco-retreat/bhitarkanika.webp";
import Daringbadi from "../assets/eco-retreat/daringbadi.webp";
import Hirakud from "../assets/eco-retreat/hirakud.webp";
import KonarkRetreat from "../assets/eco-retreat/konark.webp";
import Putsil from "../assets/eco-retreat/putsil.webp";
import Satkosia from "../assets/eco-retreat/satkosia.webp";
import Sonapur from "../assets/eco-retreat/sonapur.webp";

export const allPackages = [
  {
    id: "puri-jagannath-darshan",
    title: "Puri Jagannath Darshan",
    image: Jagannath,
    duration: "4 Nights / 5 Days",
    badge: "Best Seller",
    badgeColor: "bg-amber-500",
    category: "spiritual",
    itinerary: ["Puri", "Konark", "Bhubaneswar", "Chilika"],
    includes: { hotel: true, cab: true, meals: true, sightseeing: true },
    price: "12,499",
    originalPrice: "15,999",
    rating: 4.8,
    reviews: 342,
    description:
      "A soul-stirring journey to the sacred Jagannath Temple, the magnificent Konark Sun Temple, and the serene Chilika Lake. Includes VIP temple darshan and local cultural experiences.",
    highlights: [
      "VIP Jagannath Temple Darshan",
      "Konark Sun Temple UNESCO Site",
      "Chilika Lake Boat Ride",
      "Dolphin Spotting",
      "Udayagiri & Khandagiri Caves",
      "Puri Beach Sunset",
    ],
    inclusions: [
      "Accommodation in 3-star hotels",
      "Daily breakfast & dinner",
      "AC cab for all transfers & sightseeing",
      "VIP temple darshan passes",
      "Chilika boat ride",
      "Professional guide",
      "All toll, parking, taxes",
    ],
    exclusions: [
      "Airfare / train fare",
      "Lunch",
      "Personal expenses",
      "Camera fees at monuments",
      "Travel insurance",
      "Tips & gratuities",
    ],
    dayPlan: [
      {
        day: 1,
        title: "Arrival in Puri",
        detail:
          "Arrive at Bhubaneswar airport/railway station, transfer to Puri (60 km). Check-in at hotel. Evening visit to Jagannath Temple for special darshan and aarti. Overnight in Puri.",
      },
      {
        day: 2,
        title: "Konark Excursion",
        detail:
          "After breakfast, drive to Konark Sun Temple (35 km) — a UNESCO World Heritage Site. Visit the Archaeological Museum, Chandrabhaga Beach. Return to Puri. Evening free at Puri Beach. Overnight in Puri.",
      },
      {
        day: 3,
        title: "Bhubaneswar Temples",
        detail:
          "Drive to Bhubaneswar (60 km). Visit Lingaraj Temple, Mukteshwar Temple, Rajarani Temple, and the ancient Udayagiri & Khandagiri Jain caves. Overnight in Bhubaneswar.",
      },
      {
        day: 4,
        title: "Chilika Lake",
        detail:
          "Drive to Chilika Lake (100 km). Enjoy a boat ride to spot Irrawaddy dolphins, visit Kalijai Temple on the island, witness migratory birds. Return to Bhubaneswar. Overnight in Bhubaneswar.",
      },
      {
        day: 5,
        title: "Departure",
        detail:
          "Morning visit to Nandankanan Zoological Park (optional). Transfer to airport/railway station for departure.",
      },
    ],
  },
  {
    id: "golden-triangle-odisha",
    title: "Golden Triangle of Odisha",
    image: GoldenTriangle,
    duration: "5 Nights / 6 Days",
    badge: "DMC Special",
    badgeColor: "bg-navy-900",
    category: "heritage",
    itinerary: ["Bhubaneswar", "Puri", "Konark", "Chilika", "Gopalpur"],
    includes: { hotel: true, cab: true, meals: true, sightseeing: true },
    price: "16,999",
    originalPrice: "21,499",
    rating: 4.9,
    reviews: 218,
    description:
      "The ultimate Odisha experience covering the iconic Golden Triangle — Bhubaneswar temples, Puri spirituality, Konark architecture — plus Chilika and Gopalpur beaches.",
    highlights: [
      "Complete Golden Triangle",
      "Gopalpur Beach Retreat",
      "Chilika Dolphin Spotting",
      "Heritage Temple Circuit",
      "Konark Light & Sound Show",
      "Puri Beach Walk",
    ],
    inclusions: [
      "Accommodation in 3-star hotels",
      "Daily breakfast & dinner",
      "AC Innova for all transfers",
      "All sightseeing as per itinerary",
      "Chilika boat ride",
      "Professional guide",
      "All toll, parking, taxes",
    ],
    exclusions: [
      "Airfare / train fare",
      "Lunch",
      "Personal expenses",
      "Camera fees",
      "Travel insurance",
      "Tips & gratuities",
    ],
    dayPlan: [
      {
        day: 1,
        title: "Arrival in Bhubaneswar",
        detail:
          "Arrive at Bhubaneswar. Visit Lingaraj Temple, Parasurameshwar Temple. Evening at Bindusagar Lake. Overnight in Bhubaneswar.",
      },
      {
        day: 2,
        title: "Bhubaneswar Heritage",
        detail:
          "Visit Mukteshwar Temple, Rajarani Temple, Udayagiri & Khandagiri Caves, Dhauli Peace Pagoda. Overnight in Bhubaneswar.",
      },
      {
        day: 3,
        title: "Bhubaneswar to Puri via Konark",
        detail:
          "Drive to Puri via Konark. Visit the Sun Temple, Chandrabhaga Beach. Continue to Puri. Evening Jagannath Temple darshan. Overnight in Puri.",
      },
      {
        day: 4,
        title: "Chilika Day Trip",
        detail:
          "Full-day excursion to Chilika Lake. Boat ride, dolphin spotting, Kalijai Temple. Return to Puri. Overnight in Puri.",
      },
      {
        day: 5,
        title: "Puri to Gopalpur",
        detail:
          "Drive to Gopalpur-on-Sea (180 km). Relax at the beach. Overnight in Gopalpur.",
      },
      {
        day: 6,
        title: "Departure",
        detail:
          "Morning beach walk. Drive back to Bhubaneswar (180 km). Transfer to airport/railway station.",
      },
    ],
  },
  {
    id: "bhitarkanika-wildlife",
    title: "Bhitarkanika Wildlife Tour",
    image: Bhitarkanika,
    duration: "3 Nights / 4 Days",
    badge: "Nature Lovers",
    badgeColor: "bg-teal-600",
    category: "wildlife",
    itinerary: ["Bhitarkanika", "Chandabali", "Dangamal"],
    includes: { hotel: true, cab: true, meals: true, sightseeing: true },
    price: "9,999",
    originalPrice: "12,499",
    rating: 4.6,
    reviews: 189,
    description:
      "Explore India's second-largest mangrove ecosystem. Spot saltwater crocodiles, migratory birds, and olive ridley turtles in their natural habitat.",
    highlights: [
      "Saltwater Crocodile Spotting",
      "Mangrove Boat Safari",
      "Bird Watching",
      "Dangamal Crocodile Centre",
      "Bhitarkanika National Park",
      "Olive Ridley Turtle Nesting (seasonal)",
    ],
    inclusions: [
      "Accommodation in forest lodge/resort",
      "All meals",
      "AC cab for transfers",
      "Boat safari in Bhitarkanika",
      "Entry fees & permits",
      "Naturalist guide",
      "All toll, parking, taxes",
    ],
    exclusions: [
      "Airfare / train fare",
      "Personal expenses",
      "Camera fees",
      "Travel insurance",
      "Tips & gratuities",
    ],
    dayPlan: [
      {
        day: 1,
        title: "Arrival at Bhitarkanika",
        detail:
          "Drive from Bhubaneswar to Chandabali/Rajnagar (180 km). Boat ride to Bhitarkanika. Check-in at forest lodge. Evening nature walk. Overnight in Bhitarkanika.",
      },
      {
        day: 2,
        title: "Bhitarkanika Boat Safari",
        detail:
          "Full-day boat safari through mangrove creeks. Spot saltwater crocodiles, kingfishers, and if lucky, monitor lizards. Visit Dangamal crocodile breeding centre. Overnight in Bhitarkanika.",
      },
      {
        day: 3,
        title: "Bird Watching & Trails",
        detail:
          "Morning bird watching session. Nature trail through the forest. Afternoon visit to Bagagahana heronry. Overnight in Bhitarkanika.",
      },
      {
        day: 4,
        title: "Departure",
        detail:
          "Morning boat ride back. Drive to Bhubaneswar. Transfer to airport/railway station.",
      },
    ],
  },
  {
    id: "odisha-beach-retreat",
    title: "Odisha Beach Retreat",
    image: Beach,
    duration: "4 Nights / 5 Days",
    badge: "Popular",
    badgeColor: "bg-sky-600",
    category: "beach",
    itinerary: ["Puri Beach", "Gopalpur", "Chandipur"],
    includes: { hotel: true, cab: true, meals: true, sightseeing: false },
    price: "14,499",
    originalPrice: "18,999",
    rating: 4.8,
    reviews: 267,
    description:
      "Relax on Odisha's finest beaches — from the vibrant Puri Beach to the serene Gopalpur-on-Sea and the magical disappearing beach of Chandipur.",
    highlights: [
      "Puri Beach Walks",
      "Gopalpur-on-Sea Serenity",
      "Chandipur Disappearing Beach",
      "Beachside Candlelight Dinner",
      "Water Sports at Puri",
      "Sunrise & Sunset Views",
    ],
    inclusions: [
      "Accommodation in beach resorts",
      "Daily breakfast & dinner",
      "AC cab for all transfers",
      "One candlelight dinner",
      "Water sports at Puri (basic)",
      "All toll, parking, taxes",
    ],
    exclusions: [
      "Airfare / train fare",
      "Lunch",
      "Premium water sports",
      "Personal expenses",
      "Travel insurance",
      "Tips & gratuities",
    ],
    dayPlan: [
      {
        day: 1,
        title: "Arrival at Puri Beach",
        detail:
          "Arrive at Puri. Check-in at beach resort. Afternoon at Puri Beach — swimming, water sports. Overnight in Puri.",
      },
      {
        day: 2,
        title: "Puri Beach Day",
        detail:
          "Full day at Puri Beach. Morning sunrise walk, afternoon water sports, evening beachside candlelight dinner. Overnight in Puri.",
      },
      {
        day: 3,
        title: "Drive to Gopalpur",
        detail:
          "Drive to Gopalpur-on-Sea (180 km). Check-in at beach resort. Relax on the pristine beach. Overnight in Gopalpur.",
      },
      {
        day: 4,
        title: "Gopalpur to Chandipur",
        detail:
          "Morning at Gopalpur. Drive to Chandipur (200 km). Experience the unique disappearing beach at low tide. Overnight in Chandipur.",
      },
      {
        day: 5,
        title: "Departure",
        detail:
          "Morning beach walk at Chandipur. Drive to Bhubaneswar (230 km). Transfer to airport/railway station.",
      },
    ],
  },
  {
    id: "complete-odisha-explorer",
    title: "Complete Odisha Explorer",
    image: Konark,
    duration: "9 Nights / 10 Days",
    badge: "Premium",
    badgeColor: "bg-amber-600",
    category: "heritage",
    itinerary: [
      "Bhubaneswar",
      "Puri",
      "Konark",
      "Chilika",
      "Gopalpur",
      "Tribal",
    ],
    includes: { hotel: true, cab: true, meals: true, sightseeing: true },
    price: "32,999",
    originalPrice: "42,999",
    rating: 4.9,
    reviews: 98,
    description:
      "The definitive Odisha journey — temples, tribes, beaches, wildlife, and everything in between. A comprehensive 10-day immersion into the soul of Incredible India.",
    highlights: [
      "Complete Odisha Coverage",
      "Temple Heritage Circuit",
      "Tribal Village Visits",
      "Chilika & Bhitarkanika",
      "Gopalpur Beach",
      "Dokra Craft Trail",
      "Local Cuisine Experience",
    ],
    inclusions: [
      "Accommodation in premium hotels/resorts",
      "Daily breakfast & dinner",
      "AC Innova for all transfers",
      "All sightseeing & entry fees",
      "Chilika & Bhitarkanika boat rides",
      "Tribal area permits",
      "Professional guide throughout",
      "All toll, parking, taxes",
    ],
    exclusions: [
      "Airfare / train fare",
      "Lunch",
      "Personal expenses",
      "Camera fees",
      "Travel insurance",
      "Tips & gratuities",
    ],
    dayPlan: [
      {
        day: 1,
        title: "Arrival in Bhubaneswar",
        detail:
          "Arrive at Bhubaneswar. Visit Lingaraj Temple, evening at Bindusagar Lake. Overnight in Bhubaneswar.",
      },
      {
        day: 2,
        title: "Bhubaneswar Heritage",
        detail:
          "Full-day temple tour — Mukteshwar, Rajarani, Udayagiri & Khandagiri, Dhauli. Overnight in Bhubaneswar.",
      },
      {
        day: 3,
        title: "Bhubaneswar to Puri via Konark",
        detail:
          "Drive to Puri via Konark Sun Temple. Evening Jagannath Temple darshan. Overnight in Puri.",
      },
      {
        day: 4,
        title: "Chilika Lake",
        detail:
          "Full-day Chilika excursion — boat ride, dolphin spotting, Kalijai Temple. Overnight in Puri.",
      },
      {
        day: 5,
        title: "Puri to Gopalpur",
        detail: "Drive to Gopalpur. Beach relaxation. Overnight in Gopalpur.",
      },
      {
        day: 6,
        title: "Gopalpur to Rayagada",
        detail:
          "Drive to Rayagada (250 km). Visit local markets. Overnight in Rayagada.",
      },
      {
        day: 7,
        title: "Tribal Villages",
        detail:
          "Visit Dongria Kondh villages, Chatikona haat. Overnight in Rayagada.",
      },
      {
        day: 8,
        title: "Koraput Valley",
        detail:
          "Drive to Koraput. Visit tribal museum, Deomali hills. Overnight in Koraput.",
      },
      {
        day: 9,
        title: "Return to Bhubaneswar",
        detail:
          "Drive back to Bhubaneswar. Evening free for shopping. Overnight in Bhubaneswar.",
      },
      {
        day: 10,
        title: "Departure",
        detail:
          "Morning visit to Nandankanan (optional). Transfer to airport/railway station.",
      },
    ],
  },
  {
    id: "jagannath-special-darshan",
    title: "Jagannath Temple Special Darshan",
    image: Jagannath,
    duration: "2 Nights / 3 Days",
    badge: "Spiritual",
    badgeColor: "bg-orange-600",
    category: "spiritual",
    itinerary: ["Puri", "Konark"],
    includes: { hotel: true, cab: true, meals: true, sightseeing: true },
    price: "7,999",
    originalPrice: "9,999",
    rating: 4.9,
    reviews: 512,
    description:
      "A focused spiritual retreat to Lord Jagannath's sacred abode. Includes special VIP darshan, participation in evening aarti, and a visit to the Konark Sun Temple.",
    highlights: [
      "VIP Darshan Access",
      "Evening Aarti Participation",
      "Konark Sun Temple",
      "Gundicha Temple",
      "Local Pandit Guide",
      "Prasad Arrangement",
    ],
    inclusions: [
      "Accommodation in hotel near temple",
      "Daily breakfast & dinner",
      "AC cab for transfers",
      "VIP darshan passes",
      "Local pandit guide",
      "Prasad arrangement",
      "All toll, parking, taxes",
    ],
    exclusions: [
      "Airfare / train fare",
      "Lunch",
      "Personal expenses",
      "Camera fees",
      "Travel insurance",
      "Tips & gratuities",
    ],
    dayPlan: [
      {
        day: 1,
        title: "Arrival & Temple Darshan",
        detail:
          "Arrive in Puri, check-in. Evening visit to Jagannath Temple for special darshan and aarti.",
      },
      {
        day: 2,
        title: "Konark & Heritage",
        detail:
          "Full-day excursion to Konark Sun Temple, Chandrabhaga Beach. Return for evening temple rituals.",
      },
      {
        day: 3,
        title: "Gundicha & Departure",
        detail: "Morning visit to Gundicha Temple, local market. Departure.",
      },
    ],
  },
  {
    id: "chilika-bird-watching",
    title: "Chilika Bird Watching Tour",
    image: Bird,
    duration: "2 Nights / 3 Days",
    badge: "Eco Tour",
    badgeColor: "bg-green-600",
    category: "wildlife",
    itinerary: ["Chilika Lake", "Nalabana", "Kalijai Temple"],
    includes: { hotel: true, cab: true, meals: false, sightseeing: true },
    price: "6,499",
    originalPrice: "8,999",
    rating: 4.5,
    reviews: 134,
    description:
      "Witness the spectacle of millions of migratory birds at Asia's largest brackish water lagoon. Boat rides, Irrawaddy dolphin spotting, and stunning sunsets included.",
    highlights: [
      "Migratory Bird Spectacle",
      "Irrawaddy Dolphin Spotting",
      "Nalabana Bird Sanctuary",
      "Kalijai Temple Island",
      "Sunset Boat Cruise",
      "Eco-friendly Tourism",
    ],
    inclusions: [
      "Accommodation in lake-side resort",
      "AC cab for transfers",
      "Boat rides in Chilika",
      "Entry fees & permits",
      "Naturalist guide",
      "All toll, parking, taxes",
    ],
    exclusions: [
      "Airfare / train fare",
      "All meals",
      "Personal expenses",
      "Camera fees",
      "Travel insurance",
      "Tips & gratuities",
    ],
    dayPlan: [
      {
        day: 1,
        title: "Arrival at Chilika",
        detail:
          "Drive from Bhubaneswar to Chilika (100 km). Check-in. Afternoon boat ride, dolphin spotting. Overnight at Chilika.",
      },
      {
        day: 2,
        title: "Nalabana Bird Sanctuary",
        detail:
          "Full-day bird watching at Nalabana. Visit Kalijai Temple. Sunset boat cruise. Overnight at Chilika.",
      },
      {
        day: 3,
        title: "Departure",
        detail:
          "Morning nature walk. Drive back to Bhubaneswar. Transfer to airport/railway station.",
      },
    ],
  },
  {
    id: "simlipal-tiger-reserve",
    title: "Simlipal Tiger Reserve",
    image: TigerReserve,
    duration: "3 Nights / 4 Days",
    badge: "Adventure",
    badgeColor: "bg-red-600",
    category: "wildlife",
    itinerary: ["Simlipal", "Barehipani", "Joranda"],
    includes: { hotel: true, cab: true, meals: true, sightseeing: true },
    price: "11,999",
    originalPrice: "14,999",
    rating: 4.7,
    reviews: 87,
    description:
      "Trek through one of India's most beautiful tiger reserves. Home to majestic waterfalls, rare melanistic tigers, and lush sal forests stretching to the horizon.",
    highlights: [
      "Tiger Safari",
      "Barehipani Waterfall",
      "Joranda Falls",
      "Melanistic Tiger (rare)",
      "Sal Forest Treks",
      "Tribal Village Visit",
    ],
    inclusions: [
      "Accommodation in forest lodge",
      "All meals",
      "AC cab for transfers",
      "Safari entries & permits",
      "Naturalist guide",
      "All toll, parking, taxes",
    ],
    exclusions: [
      "Airfare / train fare",
      "Personal expenses",
      "Camera fees",
      "Travel insurance",
      "Tips & gratuities",
    ],
    dayPlan: [
      {
        day: 1,
        title: "Arrival at Simlipal",
        detail:
          "Drive from Bhubaneswar to Simlipal (250 km). Check-in at forest lodge. Evening nature walk. Overnight in Simlipal.",
      },
      {
        day: 2,
        title: "Simlipal Safari",
        detail:
          "Full-day jungle safari. Visit Barehipani waterfall (2nd highest in India). Tiger and elephant tracking. Overnight in Simlipal.",
      },
      {
        day: 3,
        title: "Joranda & Tribal Villages",
        detail:
          "Visit Joranda waterfall, nearby tribal villages. Afternoon trek through sal forests. Overnight in Simlipal.",
      },
      {
        day: 4,
        title: "Departure",
        detail:
          "Morning bird watching. Drive back to Bhubaneswar. Transfer to airport/railway station.",
      },
    ],
  },
  {
    id: "koraput-valley-trail",
    title: "Koraput Valley Trail",
    image: Koraput,
    duration: "4 Nights / 5 Days",
    badge: "Cultural Deep Dive",
    badgeColor: "bg-orange-600",
    category: "tribal",
    itinerary: ["Koraput", "Lamtaput", "Kunduli", "Nandapur"],
    includes: { hotel: true, cab: true, meals: false, sightseeing: true },
    price: "16,499",
    originalPrice: "20,999",
    rating: 4.8,
    reviews: 98,
    description:
      "Explore the stunning Koraput valley — home to the Paraja, Bhumia, and Kondh tribes. Visit the famous Kunduli haat, tribal museums, and ancient cave paintings.",
    highlights: [
      "Kunduli Tribal Haat",
      "Paraja Village Visit",
      "Koraput Tribal Museum",
      "Deomali Hill Views",
      "Dokra Craft Workshops",
      "Coffee Plantation Walk",
    ],
    inclusions: [
      "Accommodation in best available hotels",
      "AC cab for all transfers",
      "All sightseeing & entry fees",
      "Tribal area permits",
      "Local tribal guide",
      "All toll, parking, taxes",
    ],
    exclusions: [
      "Airfare / train fare",
      "All meals",
      "Personal expenses",
      "Camera fees in tribal areas",
      "Travel insurance",
      "Tips & gratuities",
    ],
    dayPlan: [
      {
        day: 1,
        title: "Arrival in Koraput",
        detail:
          "Arrive at Koraput via train from Bhubaneswar or drive from Visakhapatnam. Check-in and visit the Tribal Museum to understand the cultural landscape. Evening visit to Jagannath Temple (built by the kings of Jeypore). Overnight in Koraput.",
      },
      {
        day: 2,
        title: "Lamtaput & Paraja Villages",
        detail:
          "Drive to Lamtaput to visit Paraja tribal villages. Witness their unique housing architecture, agricultural practices, and daily life. The Paraja women wear distinctive heavy aluminum necklaces. Afternoon visit to a Dokra metal craft workshop. Overnight in Koraput.",
      },
      {
        day: 3,
        title: "Kunduli Haat",
        detail:
          "Visit the famous Kunduli haat (Thursday market) — the largest tribal market in Koraput district. Watch as hundreds of tribes gather to trade forest produce, livestock, and crafts. A photographer's paradise. Afternoon visit to nearby Bhumia villages. Overnight in Jeypore.",
      },
      {
        day: 4,
        title: "Deomali & Nandapur",
        detail:
          "Drive to Deomali — the highest peak in Odisha (1,672 m) in the Eastern Ghats. Stunning panoramic views of the valley. Visit Nandapur, the ancient capital of the Jeypore kingdom, with its historic temples and step wells. Overnight in Jeypore.",
      },
      {
        day: 5,
        title: "Departure",
        detail:
          "Morning visit to a coffee plantation. Board train to Bhubaneswar or drive to Visakhapatnam for departure.",
      },
    ],
  },
  {
    id: "rath-yatra-3n-4d",
    title: "Rath Yatra Package",
    image: RathYatra,
    duration: "3 Nights / 4 Days",
    badge: "Festival Special",
    badgeColor: "bg-orange-600",
    category: "religious",
    itinerary: ["Bhubaneswar", "Konark", "Puri", "Chilika Lake (Satpada)"],
    includes: { hotel: true, cab: true, meals: true, sightseeing: true }, // CPAI implies breakfast included
    price: "11,250", // Based on lowest per adult cost for 12 adults in 3*
    originalPrice: "14,000",
    rating: 4.8,
    reviews: 56,
    description:
      "Immerse yourself in the spiritual grandeur of the Rath Yatra in Puri, one of the worlds most spectacular religious festivals. Witness the majestic chariot procession as Lord Jagannath, Balabhadra, and Subhadra are ceremoniously moved.",
    highlights: [
      "Grand Chariot Procession",
      "En-route Dhauli & Lingaraj Temple",
      "Black Pagoda Sun Temple",
      "Irrawaddy Dolphin Spotting",
      "Puri Beach Evening",
      "Panda Ji Assistance on Ratha",
    ],
    inclusions: [
      "On Arrival Flower Bouquet",
      "Welcome Snacks Kit in Vehicle",
      "Breakfast at the hotel",
      "Welcome Drink",
      "500ml Water bottle per person per day during sightseeing",
      "Accommodation on double sharing basis on base category room",
      "All transfers and sightseeing by AC Vehicle",
      "All toll taxes, parking charges, driver allowances",
      "Government Service Tax (GST)",
    ],
    exclusions: [
      "Any Air or Rail fare",
      "Boating charges at Chilika Lake",
      "No Entry Fees",
      "No Guide Charges",
      "Any other meal not mentioned in price includes",
      "Any expenses of personal nature",
    ],
    dayPlan: [
      {
        day: 1,
        title: "Arrival Bhubaneswar - Konark - Puri",
        detail:
          "Pickup from Bhubaneswar airport. En-route visit Dhauli (the peace pagoda), Lingaraj Temple, Chausath (64) Yogini temple then drive to Konark on marine drive, visit Chandrabhaga beach & Ramchandi temple. Then visit the famous Sun Temple. Check into Puri hotel, evening at Puri beach. Overnight at Puri.",
      },
      {
        day: 2,
        title: "Puri (Rath Yatra Celebration)",
        detail:
          "Witness the majestic chariot procession along the Grand Road. Feel the electrifying energy as thousands of devotees walk alongside the massive chariots. Due to security restrictions, the entire experience is explored on foot. Overnight Stay at Puri.",
      },
      {
        day: 3,
        title: "Puri - Chilika Lake (Satpada) - Bhubaneswar",
        detail:
          "After breakfast, check out and depart for Satapada, Chilka. En-route visit Alarnath Temple. Take a boat to meet the Irrawaddy Dolphins and the sea mouth. Visit Kalabhoomi Craft Museum, Khandagiri & Udaigiri Jain Rock Cut Caves. Overnight stay at Bhubaneswar.",
      },
      {
        day: 4,
        title: "Bhubaneswar Local & Departure",
        detail:
          "After breakfast, visit Rajarani temple, Mukteshwar temple, and Parshurameshwaram Temple. If time permits, explore Nandankanan Zoo, Tribal Museum, and Ekamra Haat for shopping. Transfer to airport/railway station for onward journey.",
      },
    ],
  },
  {
    id: "chariot-festival-4n-5d",
    title: "Chariot Festival (Puri Rath Yatra) Tour",
    image: RathYatra,
    duration: "4 Nights / 5 Days",
    badge: "Spiritual Journey",
    badgeColor: "bg-yellow-600",
    category: "religious",
    itinerary: [
      "Bhubaneswar",
      "Alarnath",
      "Chilika Lake",
      "Raghurajpur",
      "Konark",
      "Puri",
      "Pipili",
    ],
    includes: { hotel: true, cab: true, meals: true, sightseeing: true }, // CP Basis (Breakfast included)
    price: "15,400", // Lowest per pax cost for 10 Pax in Economy
    originalPrice: "19,500",
    rating: 4.7,
    reviews: 48,
    description:
      "Celebrate the divine journey of Lord Jagannath, Balabhadra, and Subhadra with a comprehensive 5-day tour exploring the heritage, crafts, and sacred temples of coastal Odisha.",
    highlights: [
      "Naba Jauban Darshan",
      "Full Day Chariot Festival Experience",
      "Raghurajpur Heritage Artisan Village",
      "World Heritage Sun Temple Konark",
      "Pipili Applique Work Market",
      "Dolphin Spotting with Included Boat Ride",
    ],
    inclusions: [
      "Transportation by AC Vehicles as per group size",
      "Toll Gate, Parking fees, and Drivers allowances",
      "Accommodation on Double sharing Room on CP Basis (Breakfast)",
      "Boating at Satapada on Chilika Lake for Dolphin Spotting",
      "1ltr Mineral Water per person per day in the vehicle",
      "GST 5% included",
    ],
    exclusions: [
      "Travel / Medical Insurance",
      "Train / Flight Fare",
      "Entry Fee to Any Monument, Park, Museum, or Monastery",
      "Sitting Arrangement at any Roof top on the day of Rath Yatra",
      "Meals other than breakfast",
      "Personal expenses such as Laundry, Drinks, Porterage, and Tips",
    ],
    dayPlan: [
      {
        day: 1,
        title: "Bhubaneswar Arrival - Alarnath - Satapada - Puri",
        detail:
          "Morning arrival at Bhubaneswar Airport. Drive to Puri, visiting Alarnath Temple & Satapada on Chilika Lake en-route. Take an included boat to see wild Irrawaddy Dolphins. Evening check-in at hotel and relax on the Blue Flag Certified Golden Beach. Overnight at Puri.",
      },
      {
        day: 2,
        title: "Puri - Raghurajpur - Konark - Puri",
        detail:
          "Morning Naba Jauban Darshan at Shree Jagannath Temple (for Hindus). Followed by an excursion trip to visit Raghurajpur artisan Village and the World Heritage Sun Temple at Konark. Overnight Stay at Puri.",
      },
      {
        day: 3,
        title: "Full Day Enjoy the Car Festival (Rath Yatra)",
        detail:
          "After breakfast, dedicate your whole day to celebrating and watching the divine car festival (Rathyatra) at Puri. Overnight Stay at Puri.",
      },
      {
        day: 4,
        title: "Puri - Bhubaneswar Sightseeing",
        detail:
          "After breakfast, check-out and drive to Bhubaneswar. En-route visit Pipili Applique work Market, Dhauli Peace Pagoda, and the temples of Parshurameshwar, Mukteshwar, Rajarani & Lingaraj. After lunch, visit Khandagiri & Udaigiri Jain Rock cut Caves. Overnight at Bhubaneswar.",
      },
      {
        day: 5,
        title: "Bhubaneswar Departure",
        detail:
          "After breakfast, check-out from the hotel and enjoy a timely departure transfer to the Airport for your onward flight.",
      },
    ],
  },
  {
    id: "jagannath-shakti-peeth",
    title: "Jagannath Darshan With Shakti Peeth Tour",
    image: Jagannath,
    duration: "4 Nights / 5 Days",
    badge: "Dual Blessing",
    badgeColor: "bg-emerald-600",
    category: "religious",
    itinerary: [
      "Bhubaneswar",
      "Puri",
      "Konark",
      "Chilika Lake",
      "Gopalpur",
      "Jajpur",
    ],
    includes: { hotel: true, cab: true, meals: true, sightseeing: true },
    price: "16,999",
    originalPrice: "21,500",
    rating: 4.8,
    reviews: 61,
    description:
      "A spectacular journey merging Odishas most sacred Vaishnavite sites with legendary Shakti Peethas. Journey from the grand temples of Puri and Bhubaneswar to the coastal shores of Gopalpur and the ancient holy site of Jajpur.",
    highlights: [
      "Maa Taratarini Shakti Peeth",
      "Girija Devi Temple in Jajpur",
      "Sunrise over Pristine Gopalpur Beach",
      "Migratory Birds & Kalijai Island Boat Trip",
      "UNESCO Sun Temple at Konark",
      "Khandagiri & Udaigiri Caves Exploration",
    ],
    inclusions: [
      "AC vehicle for all transfers and specified sightseeing tours",
      "Double sharing room accommodation on CP basis (with breakfast)",
      "Toll fees, parking clearances, and driver allowances",
      "Complimentary mineral water during long transit days",
    ],
    exclusions: [
      "Air / Train travel fares",
      "Boating rentals at Barkul (Chilika Lake)",
      "Monument and park entrance tickets",
      "Personal expenses such as laundry, specialized guide fees, and extra meals",
    ],
    dayPlan: [
      {
        day: 1,
        title: "Bhubaneswar Arrival - Konark - Puri",
        detail:
          "Morning arrival at Bhubaneswar Airport. Drive directly to Puri, stopping to experience the Dhauli Peace Pagoda, Pipili Applique Work Market, and the World Heritage Sun Temple at Konark. Spend your evening relaxing on Puris Golden Beach. Overnight at Puri.",
      },
      {
        day: 2,
        title: "Puri Darshan - Chilika Lake (Barkul) - Gopalpur",
        detail:
          "Begin with an early morning darshan at Shree Jagannath Temple (for Hindus). After breakfast, check out and drive towards Gopalpur-on-Sea via Barkul on Chilika Lake. Enjoy an island boat ride to Kalijai Temple to witness migratory birds. Overnight at Gopalpur.",
      },
      {
        day: 3,
        title: "Gopalpur - Taratarini Shakti Peeth - Bhubaneswar",
        detail:
          "Catch the sunrise on Gopalpur beach. After breakfast, checkout and drive to Bhubaneswar, visiting the revered hill-top Taratarini Shakti Peeth en-route. Upon reaching Bhubaneswar, explore the ancient Khandagiri & Udaigiri Jain Rock Cut Caves. Overnight in Bhubaneswar.",
      },
      {
        day: 4,
        title: "Excursion to Girija Devi Temple (Jajpur)",
        detail:
          "Embark on a morning excursion to Jajpur to visit the highly sacred Girija Devi Temple Shakti Peeth. After lunch, drive back to Bhubaneswar, stopping at the Chattia Bata Shree Jagannath Temple along the way. Evening open for local shopping. Overnight in Bhubaneswar.",
      },
      {
        day: 5,
        title: "Temple City Sightseeing & Departure",
        detail:
          "After breakfast, checkout and tour the historical city of temples: Parshurameshwar, Mukteshwar, Rajarani, Kedargouri, Brahmeshwar, Bhaskareshwar, and the majestic Lingaraj Temple. Conclude with a direct transfer to the airport for your flight.",
      },
    ],
  },
  {
    id: "kashmir-of-odisha-daringbadi",
    title: "Trip to Kashmir of Odisha",
    image: KashmirOfOdisha,
    duration: "4 Nights / 5 Days",
    badge: "Hill Station",
    badgeColor: "bg-blue-600",
    category: "nature",
    itinerary: [
      "Gopalpur",
      "Surada",
      "Mandasaru Valley",
      "Daringbadi",
      "Bhubaneswar",
    ],
    includes: { hotel: true, cab: true, meals: true, sightseeing: true },
    price: "17,800",
    originalPrice: "22,000",
    rating: 4.7,
    reviews: 39,
    description:
      "Escape to Daringbadi, famously known as the Kashmir of Odisha. Travel through the winding roads of the Eastern Ghats, peaceful silent valleys, refreshing coffee gardens, and pine jungles.",
    highlights: [
      "Mandasaru Silent Valley of Odisha",
      "Panoramic Sunset Views from Hilltops",
      "Pine Jungles & Coffee Plantations",
      "Maa Taratarini Hilltop Shakti Peeth",
      "Madhuban Emu Bird Farm",
    ],
    inclusions: [
      "Hotel and eco-resort accommodations",
      "AC vehicle transfers for all scenic transits",
      "Daily breakfast at properties",
      "Driver allowances, road tolls, and local parking fees",
    ],
    exclusions: [
      "Train or flight tickets",
      "All monument, waterfall, and eco-park entry fees",
      "Lunch and dinner meals",
      "Personal laundry, drinks, and tips",
    ],
    dayPlan: [
      {
        day: 1,
        title: "Arrival & Gopalpur Pristine Beach",
        detail:
          "Arrive at Bhubaneswar or Behrampur station and transfer to Gopalpur-on-Sea. En-route, visit the sacred hill-top Maa Taratarini Temple Shakti Peeth. Check into the hotel and relax on the beach. Overnight at Gopalpur.",
      },
      {
        day: 2,
        title: "Gopalpur - Surada Dam - Mandasaru Valley",
        detail:
          "Watch the beautiful sunrise on the beach followed by breakfast. Checkout and drive to Mandasaru, the Silent Valley of Odisha, negotiating beautiful Eastern Ghats mountain roads. Visit Surada Dam, Maa Khunteshwari Temple, and Rushikulya River along the way. Catch the sunset from the valley viewpoint. Overnight at Mandasaru.",
      },
      {
        day: 3,
        title: "Mandasaru Valley - Daringbadi",
        detail:
          "Enjoy morning panoramic views of Mandasaru Gorge. Checkout and drive to Daringbadi, visiting the refreshing Kuti Waterfall along the way. Check into your mountain resort and witness another gorgeous hilltop sunset. Overnight at Daringbadi.",
      },
      {
        day: 4,
        title: "Daringbadi Full Day Sightseeing",
        detail:
          "After breakfast, dive into a full day of exploration: Hill Top View Point, Doluri River, Pine Jungle, lush Coffee Plantation gardens, Lovers Point, Daringbadi Waterfalls, and the Madhuban Emu birds farm. Overnight at Daringbadi.",
      },
      {
        day: 5,
        title: "Daringbadi - Bhubaneswar Departure",
        detail:
          "Enjoy breakfast and check out from your resort. Drive down the hills to Bhubaneswar, where you will be dropped off at your pre-booked hotel, railway station, or the airport for your journey home.",
      },
    ],
  },
  {
    id: "vivid-odisha-bhitarkanika",
    title: "Vivid Odisha Tour",
    image: VividOdisha,
    duration: "6 Nights / 7 Days",
    badge: "Wildlife & Culture",
    badgeColor: "bg-green-700",
    category: "wildlife",
    itinerary: [
      "Bhubaneswar",
      "Diamond Triangle",
      "Bhitarkanika",
      "Dhenkanal",
      "Konark",
      "Puri",
      "Chilika",
    ],
    includes: { hotel: true, cab: true, meals: true, sightseeing: true },
    price: "28,900",
    originalPrice: "35,500",
    rating: 4.9,
    reviews: 24,
    description:
      "An ultimate loop around Odishas diverse heritage. Discover ancient Buddhist university excavations, cruise through crocodile-filled mangrove swamps, sleep in royal palaces, and witness coastal engineering wonders.",
    highlights: [
      "Bhitarkanika Mangrove Boat Cruise",
      "Giant Saltwater Crocodile Spotting",
      "Stay at a Heritage Royal Palace in Dhenkanal",
      "Diamond Triangle Buddhist Sites",
      "Nuapatna Heritage Weaving Village",
    ],
    inclusions: [
      "6 Nights accommodation including a Royal Palace and jungle lodges",
      "All land transits by a comfortable private AC vehicle",
      "Daily breakfast at all hotels",
      "Private boat tracking cruises inside Bhitarkanika National Park",
    ],
    exclusions: [
      "Air / Train travel fares to Odisha",
      "National Park entry permits and camera clearances",
      "Boat trip charges at Chilika Lake",
      "Meals outside of specified breakfasts",
    ],
    dayPlan: [
      {
        day: 1,
        title: "Bhubaneswar Arrival",
        detail:
          "Arrive at Bhubaneswar Airport and transfer to your hotel. If time permits, visit the ancient Khandagiri & Udaigiri Jain Rock Cut Caves. Overnight stay in Bhubaneswar.",
      },
      {
        day: 2,
        title: "Bhubaneswar - Diamond Triangle - Bhitarkanika",
        detail:
          "After breakfast, check out and drive to Bhitarkanika. En-route, explore the grand Diamond Triangle of Odisha—Lalitgiri, Ratnagiri, and Udayagiri Buddhist excavated sites. Check-in at your nature lodge. Overnight at Bhitarkanika.",
      },
      {
        day: 3,
        title: "Bhitarkanika Wildlife Boat Cruise",
        detail:
          "Enjoy a thrilling boat cruise on the rivers and creeks to spot giant Salt Water Crocodiles, spotted deer, wild boars, and monitor lizards. Take a nature trek inside the old sanctuary area to find the ancient Shiva temple and hunting tower. Overnight at Bhitarkanika.",
      },
      {
        day: 4,
        title: "Bhitarkanika - Crocodile Center - Dhenkanal Palace",
        detail:
          "Morning trek inside Dangamal park to view unique white crocodiles and breeding research exhibits. Checkout and drive to Dhenkanal, checking into the Royal Palace. Late afternoon excursion to Joranda Ashram to witness unique evening rituals by Mahima Monks. Overnight at Royal Palace Dhenkanal.",
      },
      {
        day: 5,
        title: "Dhenkanal - Nuapatna Weaving - Konark - Puri",
        detail:
          "After breakfast, checkout and proceed to Puri. En-route, visit Nuapatna Textile Village, the architectural marvel of the Sun Temple at Konark, and Chandrabhaga Beach. Check into your Puri beach hotel. Overnight at Puri.",
      },
      {
        day: 6,
        title: "Puri Grand Road - Chilika Lake - Bhubaneswar",
        detail:
          "Spend morning hours at Grand Road soaking in the devotional vibes of Shree Jagannath Temple. Drive to Satapada on Chilika Lake for a private boat ride to spot wild Irrawaddy Dolphins. Drive to Bhubaneswar for check-in. Overnight at Bhubaneswar.",
      },
      {
        day: 7,
        title: "Bhubaneswar Heritage Temple Tour & Departure",
        detail:
          "After breakfast, check out and visit Dhauli Peace Pagoda followed by the masterpieces of Kalingan architecture: Parshurameshwar, Mukteshwar, Rajarani, and Lingaraj temples. Conclude with a direct departure transfer to the airport.",
      },
    ],
  },
  {
    id: "puri-gangasagar-baidyanath-dham",
    title: "Jagannath Puri, Gangasagar & Baba Baidyanath Tour",
    image: Deoghar,
    duration: "7 Nights / 8 Days",
    badge: "Mega Pilgrimage",
    badgeColor: "bg-red-700",
    category: "religious",
    itinerary: [
      "Bhubaneswar",
      "Puri",
      "Chilika Lake",
      "Konark",
      "Kolkata",
      "Gangasagar",
      "Deoghar",
    ],
    includes: { hotel: true, cab: true, meals: true, sightseeing: true },
    price: "34,500",
    originalPrice: "42,000",
    rating: 4.9,
    reviews: 73,
    description:
      "The ultimate holy journey across Eastern India. Attain blessings at Jagannath Dham, take a holy dip at the sacred delta confluence in Gangasagar, and pay homage to one of the 12 elite Shiva Jyotirlingas at Deoghar[cite: 464, 466, 475, 479, 480].",
    highlights: [
      "Shree Jagannath Temple Darshan in Puri [cite: 469]",
      "Holy Dip & Kapil Muni Temple at Gangasagar [cite: 475]",
      "Baba Baidyanath Dham Sacred Jyotirlinga [cite: 479, 480]",
      "UNESCO Sun Temple at Konark [cite: 472]",
      "Basukinath Pilgrimage Circuit completion [cite: 483]",
    ],
    inclusions: [
      "7 Nights accommodation in selected destination hotels [cite: 468, 474, 478]",
      "All ground transfers by private AC vehicle at each destination zone [cite: 467, 474, 478]",
      "Daily breakfast across all properties [cite: 469, 474, 476, 483]",
      "Interstate flight from Bhubaneswar to Kolkata included [cite: 474]",
    ],
    exclusions: [
      "Interstate train/rail ticket bookings from Howrah to Jasidhi [cite: 477]",
      "Chilika Lake boating or ferry booking rentals [cite: 472]",
      "Monument access fees or ritual offerings [cite: 472]",
      "Lunch, dinners, and laundry facilities [cite: 472]",
    ],
    dayPlan: [
      {
        day: 1,
        title: "Bhubaneswar Arrival - Puri Transfer",
        detail:
          "On arrival at Bhubaneswar Airport, get a private drive to Puri[cite: 467]. En-route, visit Dhauli Peace Pagoda, Pipili Applique Work Market, and Sakhigopal Temple[cite: 467]. Check into your Puri hotel and enjoy the evening free at the Golden Beach[cite: 468]. Overnight at Puri[cite: 469].",
      },
      {
        day: 2,
        title: "Puri Darshan & Chilika Lake Excursion",
        detail:
          "Enjoy breakfast followed by holy darshan at Shree Jagannath Temple[cite: 469]. Proceed for a day excursion to Satapada on Chilika Lake to cruise and spot wild Irrawaddy Dolphins[cite: 470]. Stop at the historic Alarnath Temple on your return[cite: 471]. Overnight at Puri[cite: 472].",
      },
      {
        day: 3,
        title: "Puri - Konark Sun Temple - Bhubaneswar",
        detail:
          "Checkout after breakfast and drive to Bhubaneswar[cite: 472]. En-route, explore Ramachandi Temple, Chandrabhaga Beach, and the UNESCO World Heritage Sun Temple at Konark[cite: 472]. In Bhubaneswar, visit the Khandagiri & Udaigiri Jain Rock-cut Caves[cite: 473]. Overnight at Bhubaneswar[cite: 473].",
      },
      {
        day: 4,
        title: "Bhubaneswar Temple Tour - Flight to Kolkata",
        detail:
          "Morning checkout and tour the historical temples: Parshurameshwar, Mukteshwar, Rajarani, and Lingaraj[cite: 474]. Transfer to Bhubaneswar Airport and fly out to Kolkata[cite: 474]. On arrival in Kolkata, check into your hotel. Overnight at Kolkata[cite: 474].",
      },
      {
        day: 5,
        title: "Kolkata - Gangasagar Holy Day Excursion",
        detail:
          "Early morning departure for a full-day spiritual excursion to Gangasagar at Sagar Island[cite: 474]. Witness the beautiful confluence of River Ganga and the Bay of Bengal, and offer prayers at the legendary Kapil Muni Temple[cite: 474, 475]. Drive back to Kolkata. Overnight stay at Kolkata[cite: 475].",
      },
      {
        day: 6,
        title: "Kolkata Sightseeing - Overnight Train to Jasidhi",
        detail:
          "After breakfast, checkout and explore Kolkata: Eden Garden, Fort William, Indian Museum, Tagores House, Victoria Memorial, St. Pauls Cathedral, and the Birla Planetarium[cite: 476]. Evening transfer to Howrah Station to board your overnight train to Jasidhi[cite: 477, 478].",
      },
      {
        day: 7,
        title: "Jasidhi Arrival - Deoghar Baba Baidyanath Dham",
        detail:
          "Morning arrival at Jasidhi Station and transfer to your hotel in Deoghar[cite: 478, 479]. After refreshing, head out for holy darshan at the sacred Baba Baidyanath Dham to offer prayers at the revered Jyotirlinga of Lord Shiva[cite: 479, 480]. Overnight stay at Deoghar[cite: 483].",
      },
      {
        day: 8,
        title: "Basukinath Temple Completion & Departure",
        detail:
          "After breakfast, checkout and visit Basukinath Temple in Dumka district (believed to complete the Deoghar pilgrimage loop)[cite: 483, 484]. Get a timely return transfer to Deoghar Airport to board your flight for onward connections[cite: 485].",
      },
    ],
  },
  {
    id: "odisha-vizag-araku-valley",
    title: "Odisha & Visakhapatnam Scenic Route",
    image: OdishaScenicRoute,
    duration: "5 Nights / 6 Days",
    badge: "Rail & Valley",
    badgeColor: "bg-blue-600",
    category: "nature",
    itinerary: [
      "Bhubaneswar",
      "Konark",
      "Puri",
      "Chilika Lake",
      "Visakhapatnam",
      "Araku Valley",
    ],
    includes: { hotel: true, cab: true, meals: true, sightseeing: true }, // CP Basis
    price: "18,900",
    originalPrice: "23,500",
    rating: 4.8,
    reviews: 42,
    description:
      "A brilliant multi-state loop that connects the architectural heritage of coastal Odisha with the high-altitude tunnels, coffee plantations, and tribal highlands of Araku Valley in Andhra Pradesh.",
    highlights: [
      "Train Journey via 40+ Mountain Tunnels to Borra Caves",
      "Galikonda Altitude Viewpoint & Padmapuram Gardens",
      "UNESCO Sun Temple at Konark & Beach transits",
      "Indira Gandhi Zoo & Kailasagiri Hills in Vizag",
      "Irrawaddy Dolphin Spotting at Satapada",
    ],
    inclusions: [
      "All regional ground transfers and sightseeing by private vehicle",
      "Hotel accommodation on double sharing with breakfast plan",
      "Assistance for transit drop-offs at railway stations and airports",
      "Toll fees, parking permits, and driver charges",
    ],
    exclusions: [
      "Interstate overnight train tickets from Bhubaneswar to Vizag",
      "Boat rentals at Satapada on Chilika Lake",
      "Entry tickets to museums, caves, zoos, or gardens",
      "Meals beyond scheduled breakfasts",
    ],
    dayPlan: [
      {
        day: 1,
        title: "Bhubaneswar Arrival - Coastal Circuit - Puri",
        detail:
          "Arrive at Bhubaneswar Airport. Proceed immediately to Puri, exploring Dhauli Buddhist heritage site, Pipili Applique market, World Heritage Konark Sun Temple, Chandrabhaga Beach, and Ramchandi beach along the way. Check-in and relax on Puris Golden Beach. Overnight at Puri.",
      },
      {
        day: 2,
        title: "Puri Temple Darshan & Chilika Lake Excursion",
        detail:
          "Morning darshan at Shree Jagannath Temple, followed by visits to Maushima and Gundicha Temples. Drive to Satapada on Chilika Lake for an island boat cruise to spot Irrawaddy Dolphins. Stop at Alarnath Temple on return transit. Overnight at Puri.",
      },
      {
        day: 3,
        title: "Bhubaneswar Sightseeing - Overnight Train to Vizag",
        detail:
          "Checkout and drive to Bhubaneswar via Shakhigopal Temple. Tour the iconic temple structures (Lingaraj, Rajarani, Mukteswar, Bramheswar), Kalabhoomi Craft Museum, and Khandagiri & Udaygiri Jain monuments. Evening drop at railway station for your overnight train to Vizag.",
      },
      {
        day: 4,
        title: "Visakhapatnam Arrival & Local Coastal Sightseeing",
        detail:
          "Arrive at Vizag Railway Station and transfer to your hotel. After refreshing, tour the Indira Gandhi Zoological Park, scenic hilltop Kailasagiri, the INS Kursura Submarine Museum, and Ramakrishna Beach. Overnight at Visakhapatnam.",
      },
      {
        day: 5,
        title: "Vizag - Exotic Mountain Rail Ride - Araku Valley",
        detail:
          "Early check-out for a spectacular morning hill rail/road travel towards Borra Caves, crossing 40 tunnels, valleys, and bridges. Visit Galikonda viewpoint, Ananthagiri hills, Araku Tribal Museum, and Padmapuram botanical gardens. Overnight at Araku Valley.",
      },
      {
        day: 6,
        title: "Araku Valley - Bheemili Beach - Vizag Departure",
        detail:
          "After breakfast, check out from the valley hotel and drive down towards Vizag city. En-route, visit the old Dutch layouts at Bheemili Beach, Thotlakonda, Rishikonda Beach, and Vabikonda Buddhist heritage hills before a final drop at Vizag Airport.",
      },
    ],
  },
  {
    id: "double-shakti-peeth-mahendragiri-peak",
    title: "Double Shakti Peeth & Mahendragiri Peak Trail",
    image: MahendragiriPeak,
    duration: "7 Nights / 8 Days",
    badge: "Mountain & Shrines",
    badgeColor: "bg-indigo-700",
    category: "religious",
    itinerary: [
      "Bhubaneswar",
      "Jajpur",
      "Konark",
      "Puri",
      "Chilika Lake",
      "Gopalpur",
      "Mahendragiri Mountain",
    ],
    includes: { hotel: true, cab: true, meals: true, sightseeing: true }, // CP Plan
    price: "22,400",
    originalPrice: "28,500",
    rating: 4.8,
    reviews: 19,
    description:
      "An exceptional pilgrimage trail tracking two legendary Odia Maha Shaktipeeths (Maa Biraja & Maa Taratarini) coupled with a mountain road ascent to Mahendragiri, the second-highest peak of the state.",
    highlights: [
      "Maa Biraja Navel Shaktipeeth at Jajpur",
      "Mahendragiri High Mountain Peak Excursion",
      "Hilltop Maa Taratarini Shakti Peeth",
      "UNESCO Sun Temple & Chandrabhaga Beach",
      "Irrawaddy Dolphin Spotting Boat Cruise",
    ],
    inclusions: [
      "Private AC transport vehicle for all land connections and mountain travel",
      "7 Nights accommodation across our designated destination properties on CP basis",
      "All standard parking bills, road highway tolls, and driver outstation fees",
    ],
    exclusions: [
      "Train or airline booking tickets",
      "Satapada dolphin spotting boat cruise hires",
      "Monument or national park entry passes",
      "Lunch and dinners",
    ],
    dayPlan: [
      {
        day: 1,
        title: "Arrival in Bhubaneswar",
        detail:
          "Arrive at Bhubaneswar Airport late in the evening and transfer to your pre-booked hotel. Overnight stay at Bhubaneswar.",
      },
      {
        day: 2,
        title: "Excursion to Maa Biraja Devi Shakti Peeth (Jajpur)",
        detail:
          "Drive 125 km north to Jajpur to visit the highly sacred Maa Biraja Temple (where Satis navel landed). Return via the Chattia Bata Shree Jagannath Temple for an evening shopping stroll. Overnight at Bhubaneswar.",
      },
      {
        day: 3,
        title: "Bhubaneswar - Konark Sun Temple - Puri Beach",
        detail:
          "Checkout and drive to Puri via the Dhauli Peace Pagoda and Pipili applique craft market. Tour the magnificent UNESCO World Heritage Site Konark Sun Temple and Chandrabhaga Beach. Check into your Puri hotel. Overnight at Puri.",
      },
      {
        day: 4,
        title: "Puri Darshan & Satapada Dolphin Cruise",
        detail:
          "Morning holy darshan at Shree Jagannath Temple (for Hindus). Proceed on an excursion to Satapada on Chilika Lake for a private boat ride to track wild Irrawaddy Dolphins. Visit Alarnath Temple at Brahmagiri on return. Overnight at Puri.",
      },
      {
        day: 5,
        title: "Puri - Taratarini Shakti Peeth - Gopalpur shore",
        detail:
          "Checkout and proceed towards Gopalpur-on-Sea. En-route, visit the highly revered hilltop Maa Taratarini Shakti Peeth overlooking the Rushikulya River. Check into your hotel and enjoy the pristine beach. Overnight at Gopalpur.",
      },
      {
        day: 6,
        title: "Excursion to Mahendragiri Mountain Peak",
        detail:
          "Embark on a full-day road mountain excursion trip to Mahendragiri, the legendary second-highest peak of Odisha, rich in history and natural ecosystem vistas. Overnight stay at Gopalpur.",
      },
      {
        day: 7,
        title: "Gopalpur Sunrise - Art Museums - Bhubaneswar",
        detail:
          "Catch a glorious sunrise on Gopalpur beach. After breakfast, checkout and drive to Bhubaneswar. Spend your afternoon exploring Kalabhoomi Craft Museum and Khandagiri & Udaigiri Jain Rock Cut Caves. Overnight at Bhubaneswar.",
      },
      {
        day: 8,
        title: "Temple City Sightseeing & Departure",
        detail:
          "Checkout and complete your tour across the ancient city of temples: Parshurameshwar, Mukteshwar, Kedar Gouri, Rajarani, and Lingaraj. Transfer to Bhubaneswar Airport in the evening for your flight.",
      },
    ],
  },
  {
    id: "jajpur-biraja-shaktipeeth-5d",
    title: "Maa Biraja Shakti Peeth & Coastal Heritage Tour",
    image: BirajaShaktipeeth,
    duration: "4 Nights / 5 Days",
    badge: "Maha Shaktipeeth",
    badgeColor: "bg-purple-700",
    category: "religious",
    itinerary: ["Bhubaneswar", "Puri", "Konark", "Jajpur", "Chattia Bata"],
    includes: { hotel: true, cab: true, meals: true, sightseeing: true },
    price: "15,999",
    originalPrice: "21,000",
    rating: 4.9,
    reviews: 27,
    description:
      "A deeply devotional 5-day route anchored by a full-day pilgrimage to the ancient Maa Biraja Temple in Jajpur, where Satis navel landed, alongside Odishas coastal heritage masterpieces.",
    highlights: [
      "Maa Biraja Jajpur Maha Shaktipeeth Darshan",
      "Chattia Bata Shree Jagannath Temple",
      "Nandankanan White Tiger Safari Population",
      "UNESCO Sun Temple at Konark",
      "Raghurajpur Heritage Artisans Village",
    ],
    inclusions: [
      "Private ground transfers and sightseeing by comfortable AC vehicle",
      "4 Nights hotel accommodation on CP Plan (Breakfast included)",
      "All driver allowances, outstation highway tolls, and local parking fees",
    ],
    exclusions: [
      "Any interstate flight or rail tickets to Odisha",
      "Chilika Lake boat ride tickets or monument entry fees",
      "Lunches and dinners unless specified",
      "Personal activities, priest offerings, or temple dakshina",
    ],
    dayPlan: [
      {
        day: 1,
        title: "Bhubaneswar Arrival - Heritage Crafts - Puri",
        detail:
          "Arrive at Bhubaneswar Airport and transfer to Puri. Along the way, visit the UNESCO World Heritage Craft Village of Raghurajpur and the Sakhigopal Temple. Check into your hotel and enjoy your evening relaxing on the Golden Beach. Overnight stay at Puri.",
      },
      {
        day: 2,
        title: "Puri Darshan & Chilika Lake Satapada Trip",
        detail:
          "Morning holy darshan at Shree Jagannath Temple (for Hindus). Visit Grand Road, Shree Gundicha, Bedi Hanuman Temple, Loknath temple, and Narendra Tank. Proceed to Satapada on Chilika Lake for an extensive boat cruise to spot wild Irrawaddy Dolphins. Return via Alarnath Temple. Overnight stay at Puri.",
      },
      {
        day: 3,
        title: "Puri - Konark Sun Temple - Bhubaneswar Temple Loop",
        detail:
          "Checkout after breakfast and visit Dhauli Peace Pagoda and the Pipli Applique Market. Drive to Konark to explore Chandrabhaga Beach and the UNESCO World Heritage Sun Temple. Proceed to Bhubaneswar to tour the ancient city temples: 108 Shivling temple, Lingaraj, Chausath Yogini, Parshurameshwar, Mukteshwar, and Rajarani. Overnight stay at Bhubaneswar.",
      },
      {
        day: 4,
        title: "Excursion to Maa Biraja Devi Shakti Peeth (Jajpur)",
        detail:
          "Morning after breakfast, go on a 125 km excursion to Jajpur to visit the highly sacred Maa Biraja Temple, revered as Trishakti Mahakali, Mahalakshmi, and Mahasaraswati. After lunch, drive back to Bhubaneswar, visiting the Chattia Bata Shree Jagannath Temple along the way. Overnight stay at Bhubaneswar.",
      },
      {
        day: 5,
        title: "Nandankanan Zoo Safari & Final Departure",
        detail:
          "After breakfast, check out from the hotel. Visit Nandankanan Zoological Park, famous for its white tiger safari and botanical garden sanctuary. Explore the ancient Khandagiri & Udaigiri Jain Rock Cut Caves before a timely transfer to the airport for your flight.",
      },
    ],
  },
  {
    id: "chilika-taratarini-shaktipeeth-5d",
    title: "Chilika Lake & Taratarini Shakti Peeth Escape",
    image: TaratariniHill,
    duration: "4 Nights / 5 Days",
    badge: "Nature & Shrines",
    badgeColor: "bg-indigo-600",
    category: "nature",
    itinerary: [
      "Bhubaneswar",
      "Chilika Lake",
      "Taratarini Shakti Peeth",
      "Puri",
      "Konark",
    ],
    includes: { hotel: true, cab: true, meals: true, sightseeing: true },
    price: "14,500",
    originalPrice: "18,200",
    rating: 4.7,
    reviews: 19,
    description:
      "An idyllic 5-day nature-focused journey that positions your base around Asia’s largest brackish water lake at Chilika before tracking hill-top shrines and coastal monuments.",
    highlights: [
      "Hilltop Maa Taratarini Shakti Peeth Shrines",
      "Relaxed Stay at Chilika Lake Eco Resort",
      "Tampara Sweet Water Lake Water Sports",
      "Shree Jagannath Temple & Golden Beach Darshan",
      "UNESCO World Heritage Monument Konark Sun Temple",
    ],
    inclusions: [
      "Comfortable private AC vehicle for all land transit routes",
      "4 Nights hotel and lakeside eco-resort accommodations",
      "Daily scheduled breakfast at the properties",
      "All highway toll fees, parking tickets, and driver allowances",
    ],
    exclusions: [
      "Airfare or train travel bookings to/from Odisha",
      "Chilika Lake island boat cruise rentals",
      "Monument entry tickets or water sport activities at Tampara Lake",
      "Meals other than breakfast",
    ],
    dayPlan: [
      {
        day: 1,
        title: "Bhubaneswar Arrival - Chilika Lake Eco Resort",
        detail:
          "Arrival at Bhubaneswar Airport and transfer to Chilika Lake. Check into your lakeside resort. Take a late afternoon boat cruise to explore the island-bound Kalijai Temple and enjoy the scenic ecosystem of the lake. Overnight stay at Chilika.",
      },
      {
        day: 2,
        title: "Chilika - Taratarini Shakti Peeth Excursion",
        detail:
          "Morning after a leisurely breakfast, embark on an excursion trip to visit the ancient hilltop Maa Taratarini Shakti Peeth, one of the oldest shrines in India. Spend your afternoon visiting the pristine Tampara Sweet Water Lake before returning to your resort. Overnight stay at Chilika.",
      },
      {
        day: 3,
        title: "Chilika Lake to Holy Puri Dham",
        detail:
          "After breakfast, check out from the resort and drive to Puri. Check into your hotel. Visit the legendary 12th-century world-famous Jagannath Temple and spend your evening relaxing on the serene Golden Sea Beach. Overnight stay at Puri.",
      },
      {
        day: 4,
        title: "Puri - Konark Sun Temple Excursion",
        detail:
          "Morning after breakfast, leave for an excursion trip to explore Ramachandi Temple, Chandrabhaga Beach, and the grand UNESCO World Heritage Monument Konark Sun Temple. Enjoy free time shopping around the beach markets in the evening. Overnight stay at Puri.",
      },
      {
        day: 5,
        title: "Puri - Temple City Sightseeing - Bhubaneswar Departure",
        detail:
          "After breakfast, check out from the hotel and proceed towards Bhubaneswar. Visit the Dhauli Peace Pagoda, the 11th-century Lingaraj Temple, and the ancient Khandagiri & Udaigiri Jain Rock Cut Caves before your final transfer to the airport.",
      },
    ],
  },
  {
    id: "daringbadi-hills-eco-escape-5d",
    title: "Daringbadi Hills & Southern Valley Eco Escape",
    image: MandasaruValley,
    duration: "4 Nights / 5 Days",
    badge: "Hill Station Escape",
    badgeColor: "bg-emerald-600",
    category: "nature",
    itinerary: [
      "Bhubaneswar",
      "Gopalpur",
      "Mandasaru Valley",
      "Daringbadi",
      "Chandragiri",
      "Taptapani",
    ],
    includes: { hotel: true, cab: true, meals: true, sightseeing: true },
    price: "16,200",
    originalPrice: "21,500",
    rating: 4.8,
    reviews: 31,
    description:
      "An immersive 5-day hill escape tracing the stunning roads of the Eastern Ghats. From the pristine beaches of Gopalpur to the deep silent gorges of Mandasaru Valley and the coffee plantations of Daringbadi.",
    highlights: [
      "Mandasaru Silent Valley of Odisha",
      "Pine Forest, Coffee Garden, & Nature Parks",
      "Mridubandha Waterfall Trails",
      "Jirang Buddhist Monastery at Chandragiri",
      "Taptapani Hot Sulphur Spring Bath",
    ],
    inclusions: [
      "All regional ground transfers and scenic mountain transits by private vehicle [cite: 583]",
      "4 Nights hotel and mountain eco-resort accommodations [cite: 583]",
      "Daily breakfast at all properties [cite: 583]",
      "All standard parking bills, road highway tolls, and driver outstation packages [cite: 583]",
    ],
    exclusions: [
      "Train or flight connectivity tickets to/from Bhubaneswar [cite: 583]",
      "Entry fees to parks, waterfalls, or monasteries [cite: 583]",
      "Lunch and dinner meals unless specified [cite: 583]",
      "Personal expenses, laundry, and tipping fees [cite: 583]",
    ],
    dayPlan: [
      {
        day: 1,
        title: "Bhubaneswar Arrival - Taratarini - Gopalpur-on-Sea",
        detail:
          "Morning arrival at Bhubaneswar railway station/airport and transfer to Gopalpur-on-Sea (a scenic 4-hour drive). Check into your hotel. In the afternoon, go on an excursion trip to visit the hilltop Maa Taratarini Shakti Peeth. Spend your evening relaxing on the pristine beach. Overnight stay at Gopalpur. [cite: 583]",
      },
      {
        day: 2,
        title: "Gopalpur - Surada Dam - Mandasaru - Daringbadi",
        detail:
          "Catch the sunrise on Gopalpur beach before breakfast. Checkout and drive towards Daringbadi via Surada Dam and the Rushikulya River. Tour Mandasaru (the Silent Valley of Odisha) to enjoy the beautiful mountain roads of the Eastern Ghats. Arrive in Daringbadi and witness the sunset from the hilltop View Point. Overnight stay at Daringbadi. [cite: 583]",
      },
      {
        day: 3,
        title: "Daringbadi Full Day Local Exploration",
        detail:
          "After breakfast, dive into a full day of exploration across Daringbadi: Nature Park, Hill Top View Point, Doluri River, Pine Jungle, Coffee Plantation garden, Lovers Point, Midubanda Waterfall, and the local Madhuban Emu birds farm. Overnight stay at Daringbadi. [cite: 583]",
      },
      {
        day: 4,
        title: "Daringbadi - Tibetan Settlement - Gopalpur Loop",
        detail:
          "Morning after breakfast, check out from the hotel and drive back toward the coast. En-route, visit the beautiful Khasada Waterfall, Chandragiri Tibetan Settlement, Jirang Monastery, and the therapeutic Taptapani Hot Spring. Arrive at Gopalpur-on-Sea for an overnight stay. [cite: 583]",
      },
      {
        day: 5,
        title: "Gopalpur - Craft Museums - Bhubaneswar Departure",
        detail:
          "After breakfast, check out from the hotel and drive down towards Bhubaneswar. Visit the Kalabhoomi Craft Museum and the ancient Khandagiri & Udaigiri Jain Rock Cut Caves before your final departure transfer to the airport/station. [cite: 583]",
      },
    ],
  },
  {
    id: "odisha-kolkata-gangasagar-5d",
    title: "Odisha & West Bengal Heritage Confluence",
    image: KolkataGhats,
    duration: "4 Nights / 5 Days",
    badge: "Two-State Pilgrimage",
    badgeColor: "bg-red-700",
    category: "religious",
    itinerary: [
      "Bhubaneswar",
      "Puri",
      "Chilika Lake",
      "Konark",
      "Kolkata",
      "Gangasagar",
    ],
    includes: { hotel: true, cab: true, meals: true, sightseeing: true },
    price: "17,500",
    originalPrice: "22,000",
    rating: 4.8,
    reviews: 46,
    description:
      "An expansive multi-state pilgrimage tracing the sacred architecture of coastal Odisha before flying out to Kolkata for a holy journey to the Ganges delta confluence at Gangasagar.",
    highlights: [
      "Holy Pilgrimage Dip at Gangasagar Delta Confluence",
      "Dakshineswar Kali Temple & Belur Math Shrines",
      "Shree Jagannath Temple & Golden Beach Darshan",
      "Irrawaddy Dolphin Tracking Cruise at Chilika Satapada",
      "Khandagiri & Udayagiri Caves Exploration",
    ],
    inclusions: [
      "All local ground transfers and sightseeing tours by private private vehicle [cite: 653]",
      "Hotel accommodation bookings on double sharing basis with breakfast [cite: 653]",
      "All driver allowances, highway road tolls, and outstation taxes [cite: 653]",
    ],
    exclusions: [
      "Interstate flight/train tickets from Bhubaneswar to Kolkata [cite: 653]",
      "Local vessel or ferry boat tickets to Sagar Island [cite: 653]",
      "Chilika Lake boat ride charges or monument entry tickets [cite: 653]",
      "Lunches, dinners, and personal expenses [cite: 653]",
    ],
    dayPlan: [
      {
        day: 1,
        title: "Bhubaneswar Arrival - Heritage Shrines - Puri",
        detail:
          "Upon arrival in Bhubaneswar, get picked up by our representative from the airport/station. Drive towards Puri, visiting the 11th-century Lingaraj Temple, Dhauli Peace Pagoda, and the colorful Pipli Applique village en-route. Check into your hotel and enjoy the evening on Puri beach. Overnight stay at Puri. [cite: 653]",
      },
      {
        day: 2,
        title: "Puri Jagannath Darshan & Chilika Lake Excursion",
        detail:
          "After breakfast, visit for holy darshan at Shree Jagannath Temple, Gundicha Temple, Loknath temple, and Bedi Hanuman Temple. Depart for Satapada on Chilika Lake, the unique home of Irrawaddy Dolphins, for a scenic boat cruise. Return to Puri to relax at the beach. Overnight stay at Puri. [cite: 653]",
      },
      {
        day: 3,
        title: "Puri - Konark Sun Temple - Flight to Kolkata",
        detail:
          "Morning after breakfast, check out from the hotel and proceed towards Bhubaneswar. Along the way, explore Ramachandi Temple, Chandrabhaga Beach, and the grand Konark Sun Temple. In Bhubaneswar, visit Kalabhoomi Craft Museum and the Khandagiri & Udayagiri Caves before dropping at the airport for your flight to Kolkata. On arrival in Kolkata, get picked up and transfer to your hotel. Overnight stay at Kolkata. [cite: 653]",
      },
      {
        day: 4,
        title: "Kolkata to Gangasagar Holy Day Excursion",
        detail:
          "Early morning, proceed for a full-day spiritual excursion to Gangasagar at Sagar Island, located in the Ganges delta about 100 km south of Kolkata. Take a holy dip at the confluence of the River Ganges and the Bay of Bengal, and offer prayers at the historic Kapil Muni Temple. Drive back to Kolkata. Overnight stay at Kolkata. [cite: 653]",
      },
      {
        day: 5,
        title: "Kolkata Shrines Loop & Final Departure",
        detail:
          "Morning after breakfast, check out from the hotel. If time permits, visit the iconic Dakshineswar Kali Temple and Belur Math (covering Kali Mata shrine, Thakur Ramakrishna Home, Mata Sarada math, and Swami Vivekananda math). Conclude with a direct drop-off transfer to the Kolkata Airport or Railway Station for your journey home. [cite: 653]",
      },
    ],
  },
];

export const blogPosts = [
  {
    id: "puri-jagannath-temple-guide",
    title: "The Ultimate Guide to Puri Jagannath Temple Darshan",
    excerpt:
      "Everything you need to know before visiting the sacred Jagannath Temple in Puri — history, darshan timings, rituals, Mahaprasad, nearby attractions, and essential travel tips.",
    image: Jagannath,
    category: "Spiritual",
    date: "May 10, 2026",
    readTime: "12 min read",
    featured: true,
    content: [
      "The Jagannath Temple in Puri is one of the most revered Hindu pilgrimage destinations in India and forms an integral part of the sacred Char Dham circuit. Dedicated to Lord Jagannath, a form of Lord Vishnu, the temple attracts millions of devotees and travelers every year from across the world.",

      
'Located in the holy city of Puri on the coast of Odisha, the temple is not only a spiritual center but also a symbol of Odisha’s rich cultural heritage. The towering 214-foot shikhara dominates the skyline and can be seen from several kilometers away.',

'The present temple was built in the 12th century by King Anantavarman Chodaganga Deva of the Eastern Ganga Dynasty. Over the centuries, it has survived invasions, natural calamities, and political changes while continuing to serve as one of India’s most important centers of worship.',

'The temple houses the sacred trinity of Lord Jagannath, Lord Balabhadra, and Devi Subhadra. Unlike most Hindu temples where deities are carved from stone or metal, the idols here are made of sacred neem wood, making the temple unique among major Hindu shrines.',

'One of the most fascinating traditions associated with the temple is Nabakalebara, a special ritual during which the wooden idols are ceremonially replaced. This event takes place only when specific astrological conditions are met and is considered one of the rarest religious ceremonies in India.',

'The temple complex covers more than 400,000 square feet and is enclosed by massive fortified walls. Inside the complex are numerous smaller shrines dedicated to various Hindu deities, making it a significant center of spiritual activity throughout the year.',

'Every day begins before sunrise with sacred rituals and prayers. The temple follows a highly structured schedule of worship, offering devotees multiple opportunities to seek blessings and witness ancient traditions that have remained unchanged for centuries.',

'Darshan generally begins early in the morning after the completion of the first rituals. Visitors are advised to arrive early to avoid crowds, especially during weekends, holidays, and major festivals when the number of pilgrims increases significantly.',

'The temple is famous for its elaborate daily rituals. More than a hundred rituals are performed throughout the day, each carrying deep spiritual significance and preserving centuries-old traditions of worship.',

'One of the highlights of a visit is experiencing the Mahaprasad, the sacred food offered to Lord Jagannath. The temple kitchen is among the largest functioning temple kitchens in the world and prepares food in traditional earthen pots using age-old cooking methods.',

'The Mahaprasad is considered extremely sacred and is shared among devotees without distinctions of caste, community, or social status. This tradition symbolizes equality and devotion before the Lord.',

'The famous Chhappan Bhog consists of fifty-six varieties of food offerings prepared for the deities. These offerings include rice dishes, sweets, lentils, vegetables, and traditional Odia delicacies that are cherished by devotees.',

'The temple is also known for several fascinating mysteries and legends. One popular belief is that the temple flag always flies in the opposite direction of the wind. Another is that the Sudarshan Chakra atop the temple appears to face the viewer from every angle.',

'The annual Rath Yatra is the most important festival associated with the temple. During this grand celebration, the deities are placed on massive wooden chariots and pulled by thousands of devotees through the streets of Puri.',

'Millions of pilgrims gather in Puri during Rath Yatra to witness this extraordinary event. The festival is regarded as one of the largest religious gatherings in the world and is a defining symbol of Odisha’s spiritual identity.',

'Visitors should note that only Hindus are permitted to enter the main temple complex. Non-Hindu visitors can view the temple exterior and admire its magnificent architecture from designated viewpoints around the city.',

'Traditional and modest clothing is recommended while visiting the temple. Visitors should avoid wearing revealing attire and maintain respectful behavior inside and around the temple premises.',

'Mobile phones, cameras, smartwatches, and electronic devices are generally not allowed inside the temple complex. It is advisable to store such items safely before entering.',

'The best time to visit Jagannath Temple is between October and March when the weather remains pleasant and suitable for sightseeing. This period is ideal for combining a temple visit with nearby attractions in Puri and Odisha.',

'Apart from the temple, travelers can visit Gundicha Temple, Narendra Tank, Lokanath Temple, Puri Beach, Golden Beach, and the vibrant local markets that offer handicrafts, traditional textiles, and souvenirs.',

'Puri is also an excellent base for exploring nearby destinations such as Konark Sun Temple, Chilika Lake, Raghurajpur Heritage Village, and Bhubaneswar, making it a key stop on any Odisha itinerary.',

'For spiritual seekers, history enthusiasts, and cultural travelers alike, the Jagannath Temple offers an unforgettable experience that combines devotion, tradition, architecture, and living heritage.',

'Whether you are visiting for darshan, participating in a festival, tasting the sacred Mahaprasad, or simply learning about Odisha’s rich traditions, the Jagannath Temple remains one of India’s most extraordinary pilgrimage destinations.',

'A visit to Puri is not just a journey to a temple—it is an immersion into centuries of faith, devotion, and cultural continuity that continue to inspire millions of people every year.',

'Planning an Odisha trip? Consider combining Jagannath Temple with Konark, Chilika Lake, Bhubaneswar, and local cultural experiences to enjoy a complete spiritual and heritage tour of Odisha.'
,
    ],
  },
  {
    id: "chilika-lake-guide",
    title: "Chilika Lake: Asia's Largest Brackish Water Lagoon",
    excerpt:
      "A complete travel guide to Chilika Lake — discover Irrawaddy dolphins, migratory birds, island temples, boat rides, and the best time to visit Odisha’s most famous natural attraction.",
    image: ChilikaLake,
    category: "Nature",
    date: "May 5, 2026",
    readTime: "11 min read",
    featured: false,
    content: [
      "Chilika Lake is one of India's most spectacular natural wonders and the largest brackish water lagoon in Asia. Stretching across the districts of Puri, Khordha, and Ganjam in Odisha, the lake covers an area that changes seasonally and supports one of the richest ecosystems in the country.",

        
"Recognized as a Ramsar Wetland of International Importance, Chilika is a paradise for birdwatchers, photographers, nature enthusiasts, and wildlife lovers. The lagoon connects with the Bay of Bengal through a narrow sea mouth, creating a unique mix of freshwater and saltwater habitats.",

"Located approximately 100 kilometers from Bhubaneswar and easily accessible from Puri, Chilika is among the most visited tourist destinations in Odisha. Its scenic beauty, biodiversity, and cultural significance make it a must-include destination in any Odisha travel itinerary.",

"The lake supports thousands of fishermen and local communities whose livelihoods depend on its rich aquatic resources. Traditional fishing practices continue to play an important role in the local economy and culture.",

"One of the biggest attractions of Chilika Lake is its incredible birdlife. During winter, the lake becomes home to over a million migratory birds arriving from regions such as Siberia, Central Asia, Mongolia, Lake Baikal, and the Himalayan ranges.",

"The migratory season generally begins in October and continues until March. During this period, visitors can observe a spectacular variety of birds including flamingos, pintails, shovelers, herons, egrets, avocets, pelicans, gulls, and many species of ducks.",

"Nalabana Bird Sanctuary is considered the heart of birdwatching activities in Chilika. The sanctuary transforms into an island during the monsoon season and becomes a haven for migratory birds during winter. It is one of the most important bird habitats in India.",

"Chilika Lake is also famous for its population of endangered Irrawaddy dolphins. These rare dolphins are one of the primary reasons travelers visit the lagoon. Unlike oceanic dolphins, Irrawaddy dolphins have a rounded forehead and a distinctive appearance that makes them easy to identify.",

"Satapada, located near the sea mouth of Chilika, is the most popular location for dolphin watching. Early morning boat rides offer the highest chances of spotting these fascinating marine mammals in their natural habitat.",

"Watching a dolphin emerge from the calm waters of Chilika is often the highlight of a visitor's trip. Boat operators are familiar with common dolphin zones and help visitors maximize their chances of sightings.",

"Apart from wildlife, Chilika offers several scenic islands that can be explored through organized boat rides. These islands provide opportunities to experience nature, culture, and local traditions in a unique setting.",

"Kalijai Island is among the most famous attractions in Chilika Lake. The island is home to the revered Kalijai Temple, dedicated to Goddess Kalijai. Local legends associated with the temple have been passed down through generations and continue to attract devotees throughout the year.",

"The Kalijai Festival, celebrated during Makar Sankranti in January, attracts thousands of pilgrims who visit the island to seek blessings and participate in cultural festivities.",

"Rajhans Island is another popular destination. Located near the sea mouth, the island offers visitors a rare opportunity to witness the meeting point of the lagoon and the Bay of Bengal. The scenic surroundings make it a favorite among photographers.",

"Breakfast Island and Honeymoon Island are smaller islands known for their picturesque landscapes and tranquil atmosphere. These locations provide excellent opportunities for relaxation and photography.",

"The southern sector of Chilika near Rambha is renowned for its breathtaking scenery. Surrounded by hills and small islands, Rambha offers some of the most beautiful boat routes within the lagoon.",

"Boat rides are one of the best ways to experience Chilika Lake. Visitors can choose from various routes depending on their interests, including dolphin tours, birdwatching trips, island excursions, and full-day explorations.",

"Three major gateways provide access to Chilika Lake: Satapada, Barkul, and Rambha. Satapada is ideal for dolphin watching, Barkul is convenient for birdwatching and Nalabana visits, while Rambha is best for scenic island tours.",

"Photography enthusiasts will find endless opportunities at Chilika. Sunrise and sunset create dramatic reflections on the water, while winter mornings offer ideal conditions for bird photography and landscape shots.",

"The biodiversity of Chilika extends beyond birds and dolphins. The lagoon supports numerous species of fish, crabs, prawns, and aquatic plants, making it one of India's most productive wetland ecosystems.",

"Local seafood is a major attraction around Chilika. Visitors can enjoy freshly prepared fish, prawns, and crab dishes at restaurants and local eateries surrounding the lake.",

"The best time to visit Chilika Lake is between October and March. During these months, the weather remains pleasant, migratory birds arrive in large numbers, and dolphin sightings are frequent.",

"Summer visits are possible, but temperatures can become quite high. Monsoon months transform the landscape into a lush green paradise, although heavy rains may affect boating schedules.",

"Travelers can reach Chilika easily from Bhubaneswar, Puri, and Berhampur. The nearest airports and major railway stations provide excellent connectivity for domestic and international visitors.",

"Many travelers combine Chilika Lake with nearby destinations such as Puri Jagannath Temple, Konark Sun Temple, Raghurajpur Heritage Village, and Bhubaneswar to create a comprehensive Odisha travel experience.",

"Responsible tourism is important while visiting Chilika. Visitors should avoid littering, respect wildlife, maintain safe distances from dolphins, and support eco-friendly tourism practices that help preserve the fragile ecosystem.",

"Whether you are a wildlife enthusiast, nature lover, photographer, birdwatcher, or simply seeking a peaceful escape, Chilika Lake offers an unforgettable experience filled with natural beauty and biodiversity.",

"A journey through Chilika reveals why it is considered one of India's greatest ecological treasures and one of Odisha's most iconic destinations.",

"Planning an Odisha holiday? A visit to Chilika Lake combined with Puri, Konark, and Bhubaneswar creates the perfect mix of spirituality, heritage, wildlife, and coastal beauty."
  ,
    ],
  },

  {
    id: "tribal-markets-photography",
    title: "Tribal Markets of Odisha: A Photographer's Guide",
    excerpt:
      "Explore the vibrant weekly tribal markets of Odisha, meet indigenous communities, discover authentic handicrafts, and learn how to photograph these cultural treasures respectfully.",
    image: Tribe,
    category: "Culture",
    date: "April 28, 2026",
    readTime: "10 min read",
    featured: false,
    content: [
      "The tribal markets, locally known as haats, are among the most authentic cultural experiences that Odisha has to offer. These colorful weekly gatherings are not merely places of trade but vibrant social centers where indigenous communities meet, exchange goods, celebrate traditions, and maintain centuries-old cultural practices.",

        
'Southern Odisha is home to some of India’s most fascinating tribal communities. The districts of Koraput, Rayagada, Nabarangpur, and Malkangiri host numerous weekly markets that attract visitors, photographers, anthropologists, and cultural enthusiasts from around the world.',

'Unlike modern shopping centers, tribal haats remain deeply connected to local traditions and rural life. Farmers, artisans, and tribal families travel from nearby villages carrying agricultural produce, forest products, livestock, handicrafts, textiles, and household goods for sale and exchange.',

'Each market operates on a specific day of the week, creating a rotating network of cultural activity across the region. This unique system allows visitors to explore different communities and traditions throughout their journey in Odisha.',

'Kunduli Market, held every Thursday near Koraput, is one of the largest tribal markets in Odisha. It attracts members of the Paraja, Gadaba, Bhumia, and Kondh tribes who arrive dressed in colorful traditional attire. The market is famous for its vibrant atmosphere, local produce, and excellent photography opportunities.',

'Chatikona Market, conducted every Wednesday near Rayagada, is particularly known for the presence of the Dongria Kondh tribe. This indigenous community gained international recognition for its successful efforts to protect the sacred Niyamgiri Hills and preserve its traditional way of life.',

'Onkadelli Market is another remarkable destination. Held every Thursday, it is one of the few places where visitors may encounter members of the Bonda tribe. The Bondas are considered one of the oldest and most distinctive tribal communities in India, known for their unique attire, jewelry, and customs.',

'The Gadaba tribe is another important indigenous group frequently seen in the markets of Koraput district. Their traditional handwoven garments and energetic dance performances are among the cultural highlights of the region.',

'For photographers, these tribal markets offer endless opportunities to capture authentic human stories, vibrant colors, traditional lifestyles, and cultural diversity. However, photography should always be approached with sensitivity and respect.',

'Before photographing individuals, it is important to seek permission. A polite greeting, friendly smile, and respectful request often help establish trust and create positive interactions with local communities.',

'Visitors should avoid treating tribal communities as tourist attractions. The goal should be cultural appreciation rather than intrusive observation. Respectful engagement creates a more meaningful experience for both visitors and local residents.',

'Many tribal women wear elaborate jewelry made from beads, brass, silver, and other materials. These ornaments often carry cultural significance and may indicate social status, age, or community affiliation.',

'Traditional tattoos are another fascinating aspect of tribal culture in Odisha. Different communities maintain distinct tattooing traditions that have been passed down through generations.',

'Apart from people photography, the markets provide excellent opportunities to document daily life. Vendors selling vegetables, forest produce, spices, livestock, and handmade goods create colorful scenes filled with activity and character.',

'One of the best purchases visitors can make is authentic tribal handicrafts. Dokra metalwork, bamboo products, handwoven textiles, wooden artifacts, bead jewelry, and natural-fiber crafts are commonly available in various markets.',

'Buying directly from artisans helps support local communities and preserves traditional craft skills. Many of these products are handmade using techniques that have remained unchanged for centuries.',

'Kotpad textiles are among the most famous tribal handicrafts of Odisha. Produced using natural dyes and traditional weaving methods, these textiles are valued for their beauty, sustainability, and cultural significance.',

'Local agricultural products such as millets, turmeric, honey, tamarind, and forest herbs are also commonly traded in tribal markets. These products provide insight into the region’s traditional food systems and sustainable lifestyles.',

'The best time to visit tribal markets is during the cooler months from October to March. Pleasant weather makes travel more comfortable and allows visitors to explore the markets and surrounding villages with ease.',

'Most markets begin early in the morning and become busiest between 8:00 AM and 12:00 PM. Arriving early provides the best opportunity to observe the markets at their most active and colorful stage.',

'Travelers should carry sufficient cash, as digital payment facilities are often unavailable in remote tribal regions. Small denominations are especially useful for purchasing local goods.',

'Hiring an experienced local guide can greatly enhance the experience. Guides help visitors understand cultural traditions, communicate with community members, and navigate remote areas more effectively.',

'Visitors should dress modestly and behave respectfully while exploring tribal villages and markets. Cultural sensitivity is essential for maintaining positive relationships with local communities.',

'The tribal regions of Odisha are not only culturally rich but also naturally beautiful. Rolling hills, dense forests, waterfalls, and rural landscapes provide additional attractions for travelers exploring the area.',

'Popular nearby destinations include Deomali, Odisha’s highest mountain peak, Duduma Waterfall, Gupteswar Cave Temple, Nandapur, and the scenic valleys of Koraput district.',

'Many cultural tours combine visits to tribal markets with village experiences, handicraft workshops, traditional dance performances, and local cuisine, creating a deeper understanding of indigenous life in Odisha.',

'Responsible tourism is particularly important in tribal areas. Visitors should avoid distributing money for photographs, refrain from interfering with cultural practices, and always respect local customs and traditions.',

'The tribal markets of Odisha offer a rare glimpse into a world where ancient traditions continue to thrive alongside modern influences. Every market visit reveals stories of resilience, identity, and cultural continuity.',

'For photographers, travelers, and cultural explorers, these remarkable gatherings provide some of the most authentic and memorable experiences available anywhere in India.',

'A journey through the tribal heartland of Odisha is not simply a sightseeing trip—it is an opportunity to connect with living cultures that have preserved their heritage for generations and continue to enrich the cultural landscape of India.'
  ,
    ],
  },

  {
    id: "konark-sun-temple-architecture",
    title: "Konark Sun Temple: Decoding the Architectural Marvel",
    excerpt:
      "Discover the history, symbolism, architecture, and fascinating legends of the Konark Sun Temple, Odisha’s iconic UNESCO World Heritage Site.",
    image: Konark,
    category: "Heritage",
    date: "April 20, 2026",
    readTime: "12 min read",
    featured: false,
    content: [
      "The Konark Sun Temple is one of India’s most extraordinary architectural masterpieces and a shining symbol of Odisha’s glorious heritage. Located on the Bay of Bengal coast about 35 kilometers from Puri, the temple attracts travelers, historians, architects, photographers, and spiritual seekers from around the world.",

        
'Built in the 13th century by King Narasimhadeva I of the Eastern Ganga Dynasty, the temple was dedicated to Surya, the Sun God. It represents the pinnacle of Kalinga architecture and remains one of the finest examples of medieval Indian temple design.',

'The entire temple complex was designed in the shape of a colossal stone chariot carrying the Sun God across the heavens. The chariot is drawn by seven majestic horses and supported by twenty-four intricately carved wheels, each representing the passage of time and cosmic movement.',

'The name Konark is derived from two Sanskrit words: Kona, meaning corner, and Arka, meaning sun. The temple’s location along the eastern coast allowed the first rays of the rising sun to illuminate the structure, emphasizing its connection to solar worship.',

'The temple was constructed using massive blocks of khondalite stone and laterite. The precision, craftsmanship, and artistic excellence displayed throughout the complex continue to amaze scholars even today.',

'One of the most fascinating aspects of Konark is its symbolic representation of time. The twenty-four wheels carved into the temple walls are believed to represent the twenty-four hours of the day. Each wheel features intricate spokes and carvings that function as sundials capable of indicating time with remarkable accuracy.',

'The seven horses pulling the stone chariot symbolize the seven days of the week and the eternal movement of the sun across the sky. Together, the wheels and horses transform the temple into a giant cosmic calendar carved in stone.',

'The walls of the temple are covered with thousands of sculptures depicting scenes from daily life, music, dance, warfare, hunting, mythology, and spiritual practices. These carvings provide a detailed visual record of medieval Odisha’s society and culture.',

'Among the most discussed features of Konark are its erotic sculptures. Similar to those found at Khajuraho, these carvings symbolize fertility, creation, human relationships, and the philosophical understanding of life during the medieval period. They form only a small portion of the temple’s extensive sculptural program but attract significant attention from visitors.',

'The temple also contains magnificent depictions of celestial musicians, dancers, animals, mythical creatures, and floral motifs. Every surface appears alive with artistic expression, showcasing the exceptional skills of Odisha’s master craftsmen.',

'The Natya Mandir, or Dance Hall, stands in front of the main temple structure. This hall was historically used for dance performances and religious ceremonies. The pillars are decorated with detailed carvings of dancers and musicians, reflecting Odisha’s deep connection to classical arts.',

'Many scholars believe that the dance traditions depicted in the temple influenced the development of Odissi, one of India’s oldest classical dance forms. Today, the temple continues to serve as an important symbol of Odisha’s cultural identity.',

'Several legends surround the construction of the temple. One popular story speaks of a young boy named Dharmapada, whose extraordinary intelligence helped solve a critical engineering challenge during construction. According to folklore, he sacrificed himself to protect the reputation of the temple builders.',

'Another legend suggests that the temple once contained a powerful magnetic stone at its summit. Sailors navigating the Bay of Bengal supposedly used the temple as a landmark, and some stories claim the magnetic force affected ship navigation. While historians debate these accounts, they remain part of Konark’s rich folklore.',

'The main sanctum of the temple has partially collapsed over time due to natural weathering, invasions, and changing environmental conditions. Despite this, the remaining structures continue to convey the grandeur and scale of the original monument.',

'In 1984, the Konark Sun Temple was designated a UNESCO World Heritage Site in recognition of its outstanding universal value. The site is now protected and carefully preserved by archaeological authorities.',

'Visitors exploring the temple can admire its extraordinary carvings from multiple angles. Every section reveals new details, making Konark a paradise for architecture enthusiasts and photographers.',

'Sunrise and sunset are particularly beautiful times to visit. The warm golden light enhances the intricate stone carvings and creates dramatic photographic opportunities throughout the complex.',

'The Konark Museum, located near the temple, houses many sculptures and artifacts recovered during conservation efforts. A visit to the museum provides deeper insight into the temple’s history and artistic achievements.',

'Another major attraction is the annual Konark Dance Festival, held every year in December. Renowned classical dancers from across India perform against the stunning backdrop of the illuminated temple, creating an unforgettable cultural experience.',

'The evening light and sound show offers visitors an engaging introduction to the temple’s history, legends, and architectural significance. Through narration, music, and visual effects, the show brings centuries of history to life.',

'Several important attractions are located near Konark. Chandrabhaga Beach, known for its scenic beauty and sunrise views, is only a short drive away. Ramachandi Temple and the coastal landscapes of the region also make excellent additions to a Konark itinerary.',

'Many travelers combine Konark with visits to Puri Jagannath Temple, Chilika Lake, Bhubaneswar’s ancient temples, and Raghurajpur Heritage Village. Together, these destinations showcase the spiritual, cultural, and natural diversity of Odisha.',

'The best time to visit Konark is between October and February when the weather is pleasant and ideal for sightseeing. Winter months also coincide with several cultural festivals and events in the region.',

'Comfortable walking shoes, sun protection, and sufficient water are recommended, particularly for daytime visits. The temple complex is extensive and rewards visitors who take time to explore its details carefully.',

'For historians, architects, artists, and curious travelers, the Konark Sun Temple offers a fascinating journey into the creativity and vision of medieval India. Every carving tells a story, and every stone reflects centuries of cultural achievement.',

'More than just a monument, Konark stands as a timeless tribute to human imagination, devotion, scientific understanding, and artistic excellence. It remains one of India’s greatest treasures and one of the most memorable destinations in Odisha.',

'A visit to the Konark Sun Temple is not simply about sightseeing—it is an opportunity to witness one of the world’s most remarkable achievements in architecture and experience the enduring legacy of Odisha’s rich heritage.'
  ,
    ],
  },

  {
    id: "bhitarkanika-amazon-east",
    title: "Bhitarkanika: India's Amazon of the East",
    excerpt:
      "Explore Bhitarkanika National Park, Odisha’s mangrove wilderness famous for saltwater crocodiles, rich biodiversity, birdlife, boat safaris, and pristine natural beauty.",
    image: Bhitarkanika,
    category: "Wildlife",
    date: "April 15, 2026",
    readTime: "11 min read",
    featured: false,
    content: [
      "Bhitarkanika National Park is one of India's most remarkable wildlife destinations and the largest mangrove ecosystem in Odisha. Often referred to as the 'Amazon of the East,' this unique wetland landscape offers visitors an extraordinary combination of mangrove forests, winding waterways, diverse wildlife, and untouched natural beauty.",

        
"Located in Kendrapara district, Bhitarkanika forms part of the Bhitarkanika Wildlife Sanctuary and covers a vast area of rivers, creeks, estuaries, mudflats, and dense mangrove forests. It is recognized internationally as one of India's most important ecological zones.",

"The region lies between the Brahmani, Baitarani, Dhamra, and Patasala river systems. The constant interaction between freshwater rivers and tidal seawater has created a rich and productive ecosystem that supports an incredible variety of plants and animals.",

"Bhitarkanika is India's second-largest mangrove ecosystem after the Sundarbans. The dense mangrove forests play a vital role in protecting the coastline from cyclones, preventing erosion, and supporting marine biodiversity.",

"The park is most famous for its population of saltwater crocodiles. These powerful reptiles are among the largest living reptiles on Earth and are a major attraction for wildlife enthusiasts visiting Odisha.",

"Bhitarkanika is home to one of India's largest populations of saltwater crocodiles. Some individuals have been recorded at lengths exceeding 18 feet, making them among the largest crocodiles found anywhere in Asia.",

"The Dangamal Crocodile Breeding Centre is one of the park's most popular attractions. Visitors can learn about crocodile conservation efforts, breeding programs, and the ecological importance of these apex predators.",

"Boat safaris provide the best opportunity to observe crocodiles in their natural habitat. As boats move silently through narrow creeks lined with mangroves, visitors often spot crocodiles basking along riverbanks or partially submerged in the water.",

"Apart from crocodiles, Bhitarkanika supports a remarkable diversity of wildlife. The park is home to spotted deer, wild boars, fishing cats, jungle cats, rhesus macaques, monitor lizards, and numerous other species.",

"Birdwatchers consider Bhitarkanika one of Odisha's finest birding destinations. More than 300 species of resident and migratory birds have been recorded in the region, making it a paradise for ornithologists and nature photographers.",

"The wetlands attract large numbers of migratory birds during winter. Species commonly observed include Asian openbill storks, egrets, herons, kingfishers, darters, cormorants, sandpipers, and many varieties of waterfowl.",

"The Bagagahana Heronry is among the largest nesting sites for waterbirds in India. During the breeding season, thousands of birds gather here to nest and raise their young, creating a spectacular wildlife experience.",

"One of the most significant nearby natural attractions is Gahirmatha Marine Sanctuary. This coastal region is internationally famous as one of the world's largest nesting grounds for Olive Ridley sea turtles.",

"Every year, thousands of Olive Ridley turtles arrive along the Odisha coast to lay eggs in a phenomenon known as arribada. Witnessing this mass nesting event is considered one of India's greatest wildlife spectacles.",

"Mangrove forests are the defining feature of Bhitarkanika. These salt-tolerant trees create a complex network of roots that provide shelter for fish, crabs, prawns, reptiles, and countless other aquatic organisms.",

"The mangroves also serve as vital nurseries for marine life and help maintain ecological balance throughout the region. Their importance in climate resilience and coastal protection has gained increasing recognition in recent years.",

"The best way to explore Bhitarkanika is by boat. Unlike traditional wildlife parks that rely on jeep safaris, Bhitarkanika offers a unique water-based experience that allows visitors to navigate through secluded creeks and remote habitats.",

"Popular entry points include Khola, Gupti, Chandabali, and Rajnagar. From these locations, visitors can arrange boat trips that vary in duration and route depending on their interests.",

"Nature photography is particularly rewarding in Bhitarkanika. Early mornings often provide excellent lighting conditions and increased wildlife activity, creating ideal opportunities for capturing memorable images.",

"Sunrise over the mangroves is a magical experience. Mist rising from the waterways, bird calls echoing through the forest, and reflections on calm water create unforgettable scenes for photographers and nature lovers alike.",

"The park is also rich in ecological research value. Scientists and conservationists regularly study its wildlife populations, mangrove ecosystems, and coastal processes to better understand and protect these fragile environments.",

"Conservation efforts in Bhitarkanika have played an important role in protecting endangered species and maintaining biodiversity. Strict regulations help ensure that tourism remains environmentally responsible and sustainable.",

"Visitors are encouraged to follow eco-friendly practices during their trip. Avoiding litter, respecting wildlife, maintaining silence, and following guide instructions contribute to the protection of the park's natural resources.",

"The best time to visit Bhitarkanika is between October and March. During these months, the weather remains pleasant, migratory birds arrive in large numbers, and boat safaris are particularly enjoyable.",

"Summer temperatures can be quite high, while the monsoon season brings heavy rainfall that may affect travel plans and accessibility in certain areas.",

"Many travelers combine Bhitarkanika with visits to nearby destinations such as Puri, Konark, Bhubaneswar, and Chilika Lake to experience Odisha's diverse attractions ranging from heritage sites to wildlife sanctuaries.",

"Accommodation options include eco-resorts, forest lodges, and guesthouses located near the sanctuary. Staying close to the park allows visitors to maximize their opportunities for wildlife observation and boat excursions.",

"For adventure seekers, wildlife enthusiasts, photographers, and nature lovers, Bhitarkanika offers an experience unlike any other in eastern India. The combination of mangrove forests, rare wildlife, and peaceful waterways creates a truly immersive natural environment.",

"A journey through Bhitarkanika reveals why it is often called the 'Amazon of the East.' Its extraordinary biodiversity, ecological significance, and untouched beauty make it one of Odisha's most valuable natural treasures.",

"Whether you are searching for crocodiles, observing migratory birds, exploring mangrove channels, or simply enjoying the serenity of nature, Bhitarkanika National Park promises an unforgettable wildlife adventure in the heart of Odisha."
  ,
    ],
  },

  {
    id: "rath-yatra-2026-guide",
    title: "Rath Yatra 2026: Complete Festival Guide",
    excerpt:
      "Everything you need to know about the world-famous Rath Yatra of Puri — history, rituals, chariots, travel tips, best viewing spots, and how to plan your visit.",
    image: RathYatra,
    category: "Festivals",
    date: "March 30, 2026",
    readTime: "13 min read",
    featured: true,
    content: [
      "Rath Yatra is the most celebrated festival of Lord Jagannath and one of the largest religious gatherings in the world. Held annually in the holy city of Puri, Odisha, the festival attracts millions of devotees, pilgrims, photographers, and travelers from across India and around the globe.",

        
'The festival is centered around Lord Jagannath, Lord Balabhadra, and Devi Subhadra, who leave the sanctum of the Jagannath Temple and travel in magnificent wooden chariots to the Gundicha Temple. This symbolic journey allows devotees who cannot enter the temple to receive the blessings of the deities.',

'The tradition of Rath Yatra is believed to be centuries old and forms an integral part of Odisha’s spiritual and cultural identity. References to the festival can be found in ancient scriptures and historical records, highlighting its enduring significance.',

'The term Rath Yatra literally means "Chariot Festival." During the celebration, massive chariots are pulled through the Grand Road, known locally as Bada Danda, by thousands of devotees using enormous ropes. Participating in the pulling of the chariots is considered highly auspicious.',

'Preparations for the festival begin months in advance. Skilled artisans and carpenters construct three entirely new wooden chariots every year using traditional techniques that have been preserved for generations.',

'Lord Jagannath travels in the chariot known as Nandighosa, which is the largest of the three. It traditionally features sixteen wheels and is decorated with vibrant fabrics, carvings, and religious symbols.',

'Lord Balabhadra rides in Taladhwaja, a majestic chariot with fourteen wheels. The structure is adorned with distinctive colors and decorations reflecting the identity of the deity.',

'Devi Subhadra travels in Darpadalana, the smallest of the three chariots. Despite its smaller size, it is equally beautiful and plays a central role in the festival procession.',

'One of the most important rituals before Rath Yatra is Snana Purnima. During this ceremony, the deities are bathed with sacred water in a public ritual attended by thousands of devotees.',

'Following Snana Purnima, the deities are believed to fall ill and enter a period known as Anasara. During this time, public darshan remains unavailable while the deities are said to recover before the grand procession.',

'The first public appearance after Anasara is called Nava Jaubana Darshan. Devotees eagerly await this occasion as it marks the rejuvenated form of the deities before Rath Yatra begins.',

'On the day of Rath Yatra, an important ceremony called Chhera Pahanra is performed by the Gajapati Maharaja of Puri. The king ceremonially sweeps the chariot platforms with a golden broom, symbolizing humility before the Lord.',

'As the procession begins, chants of "Jai Jagannath" fill the air while thousands of devotees pull the giant chariots through the streets. The atmosphere is charged with devotion, excitement, and spiritual energy.',

'The destination of the journey is the Gundicha Temple, located approximately three kilometers from the Jagannath Temple. According to tradition, the Gundicha Temple represents the home of Lord Jagannath’s aunt.',

'The deities remain at the Gundicha Temple for several days, allowing devotees additional opportunities for darshan. Special rituals and celebrations continue throughout this period.',

'The return journey is known as Bahuda Yatra. During this procession, the deities travel back to the Jagannath Temple amid equally enthusiastic celebrations and large crowds.',

'One of the highlights following Bahuda Yatra is Suna Besha, when the deities are adorned with magnificent gold ornaments. This spectacular ritual attracts enormous numbers of devotees and photographers.',

'Another important event is Niladri Bije, which marks the ceremonial return of the deities to the sanctum of the Jagannath Temple and concludes the festival cycle.',

'Rath Yatra is not merely a religious event; it is also a celebration of community, equality, and devotion. People from different backgrounds, regions, and countries gather together in a spirit of unity and faith.',

'The Grand Road of Puri offers the most direct view of the procession. However, due to the immense crowds, visitors should arrive early and carefully plan their movements throughout the day.',

'Many hotels and guesthouses located along Bada Danda provide elevated views of the festival. These accommodations are highly sought after and often sell out months in advance.',

'Travelers planning to attend Rath Yatra should book transportation and accommodation well ahead of time. Puri experiences one of its busiest periods of the year during the festival.',

'Comfortable clothing, drinking water, sunscreen, and essential medications are recommended for visitors. The festival takes place outdoors and often involves extended periods of walking and standing.',

'Safety is extremely important due to the large crowds. Visitors should remain aware of their surroundings, follow official instructions, and keep family members together throughout the event.',

'Photography enthusiasts will find countless opportunities during Rath Yatra. The colorful chariots, devotional expressions, traditional attire, and vibrant street scenes create remarkable visual experiences.',

'The early morning preparations, chariot decorations, and ceremonial rituals provide some of the most compelling photographic moments of the festival.',

'Local food vendors and restaurants offer a variety of traditional Odia dishes during the celebrations. Many visitors also seek the sacred Mahaprasad from the Jagannath Temple, which holds deep religious significance.',

'Beyond the festival itself, visitors can explore Puri Beach, Gundicha Temple, Narendra Tank, Raghurajpur Heritage Village, Konark Sun Temple, and Chilika Lake to enrich their Odisha travel experience.',

'The best way to experience Rath Yatra is with patience and respect for local traditions. Understanding the rituals and cultural significance of the event greatly enhances the overall experience.',

'For first-time visitors, guided tours can provide valuable insights into the history, symbolism, and sequence of ceremonies associated with the festival.',

'Rath Yatra continues to inspire millions through its message of devotion, inclusiveness, and spiritual connection. The sight of the massive chariots moving through the streets of Puri remains one of the most unforgettable experiences in Indian culture.',

'Whether you visit as a pilgrim, traveler, photographer, or cultural enthusiast, Rath Yatra offers a unique opportunity to witness one of the world’s most extraordinary religious celebrations.',

'A journey to Puri during Rath Yatra is more than a trip—it is an immersion into centuries of living tradition, devotion, and cultural heritage that continues to unite people from all walks of life.',

'For those seeking to experience the spiritual heart of Odisha, there is no event more iconic, powerful, and memorable than the magnificent Rath Yatra of Puri.'
  ,
    ],
  },
];

export const destinations = [
  {
    id: "puri",
    name: "Puri",
    tagline: "The Abode of Lord Jagannath",
    image: Jagannath,
    description:
      "Puri is one of the four sacred Char Dham pilgrimage sites and home to the world-famous Jagannath Temple. Beyond its spiritual significance, Puri offers a vibrant beach culture, ancient mathas (monasteries), and the grand Rath Yatra festival that draws millions.",
    attractions: [
      {
        name: "Jagannath Temple",
        description:
          "The 12th-century temple housing Lord Jagannath, Balabhadra, and Subhadra. One of the Char Dham pilgrimage sites. The temple kitchen is the largest in the world.",
        image:
          "https://images.pexels.com/photos/5459656/pexels-photo-5459656.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Temple",
      },
      {
        name: "Puri Beach",
        description:
          "A golden-sand beach stretching along the Bay of Bengal. Famous for sunrise views, sand art, and the annual Beach Festival. Safe for swimming and water sports.",
        image:
          "https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Beach",
      },
      {
        name: "Gundicha Temple",
        description:
          "The destination temple of the Rath Yatra chariots. Lord Jagannath stays here for 9 days during the festival. Beautiful gardens and peaceful ambiance.",
        image:
          "https://images.pexels.com/photos/5459656/pexels-photo-5459656.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Temple",
      },
      {
        name: "Raghurajpur Heritage Village",
        description:
          "A heritage crafts village where every household is an artist's studio. Famous for Pattachitra paintings, palm leaf engravings, and Gotipua dance.",
        image:
          "https://images.pexels.com/photos/6929396/pexels-photo-6929396.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Heritage",
      },
      {
        name: "Loknath Temple",
        description:
          "An ancient Shiva temple near the Jagannath Temple. The lingam is always submerged in water, and devotees can see it only by looking through a window.",
        image:
          "https://images.pexels.com/photos/5459656/pexels-photo-5459656.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Temple",
      },
      {
        name: "Sakshi Gopal Temple",
        description:
          'A 15th-century Krishna temple 20 km from Puri. The idol is believed to have walked from Vrindavan to Puri as a witness ("sakshi") in a dispute.',
        image:
          "https://images.pexels.com/photos/5459656/pexels-photo-5459656.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Temple",
      },
    ],
  },
  {
    id: "bhubaneswar",
    name: "Bhubaneswar",
    tagline: "The Temple City of India",
    image: Bhubaneshwar,
    description:
      "Bhubaneswar, the capital of Odisha, is a city where ancient temples stand alongside modern architecture. With over 700 temples spanning the 7th to 13th centuries, it is a living museum of Kalinga architecture and the gateway to all of Odisha.",
    attractions: [
      {
        name: "Lingaraj Temple",
        description:
          "The largest and most revered temple in Bhubaneswar, dedicated to Lord Shiva. Built in the 11th century, it stands 180 feet tall and represents the pinnacle of Kalinga architecture.",
        image:
          "https://images.pexels.com/photos/7691105/pexels-photo-7691105.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Temple",
      },
      {
        name: "Mukteshwar Temple",
        description:
          'Called the "Gem of Odishan Architecture," this 10th-century temple is famous for its exquisite torana (arched gateway) and intricate carvings of ascetics, musicians, and celestial beings.',
        image:
          "https://images.pexels.com/photos/7691105/pexels-photo-7691105.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Temple",
      },
      {
        name: "Rajarani Temple",
        description:
          'Known as the "Love Temple" for its erotic carvings, this 11th-century temple is unique for having no presiding deity. Built from reddish-gold sandstone (rajarani), it glows at sunset.',
        image:
          "https://images.pexels.com/photos/7691105/pexels-photo-7691105.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Temple",
      },
      {
        name: "Udayagiri & Khandagiri Caves",
        description:
          "Ancient Jain cave complexes carved into hillsides in the 1st century BC. The caves feature beautiful carvings, inscriptions, and the famous elephant-headed Ranigumpha cave.",
        image:
          "https://images.pexels.com/photos/7691105/pexels-photo-7691105.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Heritage",
      },
      {
        name: "Dhauli Peace Pagoda",
        description:
          "The site where Emperor Ashoka embraced Buddhism after the Kalinga War. The Shanti Stupa (Peace Pagoda) built by Japanese monks offers panoramic views and profound serenity.",
        image:
          "https://images.pexels.com/photos/7691105/pexels-photo-7691105.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Heritage",
      },
      {
        name: "Nandankanan Zoological Park",
        description:
          "A premier zoo and botanical garden spread over 400 hectares. Home to white tigers, melanistic tigers, and the largest crocodile breeding center in India.",
        image:
          "https://images.pexels.com/photos/162240/howler-monkey-monkey-mammal-fur-162240.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Nature",
      },
    ],
  },
  {
    id: "konark",
    name: "Konark",
    tagline: "The Sun Temple City",
    image: Konark,
    description:
      "Konark is home to the magnificent Sun Temple — a UNESCO World Heritage Site shaped like a colossal chariot of the Sun God. This 13th-century architectural marvel is the pinnacle of Kalinga art and one of the most visited monuments in India.",
    attractions: [
      {
        name: "Sun Temple",
        description:
          "A UNESCO World Heritage Site shaped as a chariot with 24 wheels and 7 horses. Built in 1250 AD, it features astronomical precision and thousands of sculptures.",
        image:
          "https://images.pexels.com/photos/7691105/pexels-photo-7691105.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Heritage",
      },
      {
        name: "Chandrabhaga Beach",
        description:
          "A pristine beach near the Sun Temple, believed to be the site of an ancient shrine to the Sun God. Clean sands, stunning sunrises, and far fewer crowds than Puri.",
        image:
          "https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Beach",
      },
      {
        name: "Archaeological Museum",
        description:
          "Houses a remarkable collection of sculptures and artifacts recovered from the Sun Temple ruins. Essential for understanding the temple's history and symbolism.",
        image:
          "https://images.pexels.com/photos/7691105/pexels-photo-7691105.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Museum",
      },
      {
        name: "Konark Dance Festival",
        description:
          "An annual classical dance festival held in December against the backdrop of the illuminated Sun Temple. Top Odissi, Bharatanatyam, and Kathak performers participate.",
        image:
          "https://images.pexels.com/photos/7691105/pexels-photo-7691105.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Festival",
      },
      {
        name: "Ramachandi Temple",
        description:
          "A temple dedicated to Goddess Ramachandi at the confluence of the Kushabhadra River and the Bay of Bengal. A peaceful spot with river and sea views.",
        image:
          "https://images.pexels.com/photos/7691105/pexels-photo-7691105.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Temple",
      },
    ],
  },
  {
    id: "kolkata",
    name: "Kolkata",
    tagline: "The City of Joy",
    image: Kolkata,
    description:
      "Kolkata, the capital of West Bengal, is the cultural capital of India. Known for its colonial architecture, vibrant arts scene, iconic Howrah Bridge, and legendary street food, it is the gateway to Eastern India and a popular add-on to Odisha tours.",
    attractions: [
      {
        name: "Victoria Memorial",
        description:
          "A stunning marble building dedicated to Queen Victoria, now a museum. Surrounded by luxury gardens, it is the most iconic landmark of Kolkata.",
        image:
          "https://images.pexels.com/photos/7691105/pexels-photo-7691105.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Heritage",
      },
      {
        name: "Howrah Bridge",
        description:
          "An iconic cantilever bridge over the Hooghly River. Carrying over 100,000 vehicles daily, it is the busiest bridge in the world and a symbol of Kolkata.",
        image:
          "https://images.pexels.com/photos/7691105/pexels-photo-7691105.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Landmark",
      },
      {
        name: "Dakshineswar Kali Temple",
        description:
          "A famous Kali temple on the banks of the Hooghly River. Associated with Ramakrishna Paramahamsa, it is one of the most visited temples in India.",
        image:
          "https://images.pexels.com/photos/5459656/pexels-photo-5459656.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Temple",
      },
      {
        name: "Park Street",
        description:
          "The cultural heart of Kolkata — colonial-era restaurants, legendary bakeries, bookshops, and nightlife. Flury's and Peter Cat are iconic stops.",
        image:
          "https://images.pexels.com/photos/7691105/pexels-photo-7691105.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Culture",
      },
      {
        name: "Mother House",
        description:
          "The headquarters of the Missionaries of Charity, founded by Mother Teresa. A place of quiet reflection and tribute to one of the world's most beloved figures.",
        image:
          "https://images.pexels.com/photos/7691105/pexels-photo-7691105.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Heritage",
      },
      {
        name: "Indian Museum",
        description:
          "The oldest and largest museum in India, founded in 1814. Houses an extraordinary collection of artifacts, mummies, fossils, and art spanning millennia.",
        image:
          "https://images.pexels.com/photos/7691105/pexels-photo-7691105.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Museum",
      },
    ],
  },
  {
    id: "deoghar",
    name: "Deoghar",
    tagline: "The Abode of Baidyanath",
    image: Deoghar,
    description:
      "Deoghar in Jharkhand is home to the Baidyanath Jyotirlinga — one of the 12 sacred Shiva temples in India. A major pilgrimage center, it draws millions of devotees, especially during the Shravani Mela when kanwariyas walk barefoot carrying Ganga water.",
    attractions: [
      {
        name: "Baidyanath Temple",
        description:
          "One of the 12 Jyotirlinga shrines of Lord Shiva. The temple complex is massive and the rituals are ancient. The Shravani Mela in July-August is the biggest event.",
        image:
          "https://images.pexels.com/photos/5459656/pexels-photo-5459656.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Temple",
      },
      {
        name: "Nandan Pahar",
        description:
          "A hilltop park with a temple, sunrise views, and a children's park. A popular picnic spot offering panoramic views of Deoghar town.",
        image:
          "https://images.pexels.com/photos/5459656/pexels-photo-5459656.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Nature",
      },
      {
        name: "Satsang Ashram",
        description:
          "A spiritual ashram dedicated to Thakur Anukul Chandra. Known for its peaceful ambiance, charitable hospital, and daily satsang gatherings.",
        image:
          "https://images.pexels.com/photos/5459656/pexels-photo-5459656.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Spiritual",
      },
      {
        name: "Trikut Parvat",
        description:
          "A hill with three peaks, 15 km from Deoghar. Home to a Shiva temple and offering trekking opportunities. The ropeway is a popular attraction.",
        image:
          "https://images.pexels.com/photos/5459656/pexels-photo-5459656.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Nature",
      },
      {
        name: "Basukinath Temple",
        description:
          "An ancient Shiva-Parvati temple 42 km from Deoghar. Believed to be the in-laws' home of Baidyanath. A serene and powerful spiritual site.",
        image:
          "https://images.pexels.com/photos/5459656/pexels-photo-5459656.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Temple",
      },
    ],
  },
  {
    id: "cuttack",
    name: "Cuttack",
    tagline: "The Silver City of India",
    image: Cuttack,
    description:
      "Cuttack, the former capital of Odisha, is known as the Silver City for its legendary silver filigree work. Situated at the confluence of the Mahanadi and Kathajodi rivers, it is a city of rich history, vibrant festivals, and the famous Durga Puja celebrations.",
    attractions: [
      {
        name: "Barabati Fort",
        description:
          "A 14th-century fort built by the Ganga dynasty. The ruins include a moat, gateway, and an ancient stadium that still hosts cultural events.",
        image:
          "https://images.pexels.com/photos/7691105/pexels-photo-7691105.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Heritage",
      },
      {
        name: "Silver Filigree Market",
        description:
          "Cuttack is the center of India's finest silver filigree (Tarakasi) work. Visit the workshops in Nayasarak to watch artisans create intricate jewelry and decorative pieces.",
        image:
          "https://images.pexels.com/photos/6929396/pexels-photo-6929396.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Art & Craft",
      },
      {
        name: "Dhabaleswar Island",
        description:
          "A scenic island in the Mahanadi River, home to the Dhabaleshwar Shiva temple. Connected by a suspension bridge, it offers river views and spiritual solace.",
        image:
          "https://images.pexels.com/photos/7691105/pexels-photo-7691105.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Temple",
      },
      {
        name: "Choudwar",
        description:
          "An ancient site believed to be the capital of the Somavamsi dynasty. Archaeological excavations have revealed temples, pottery, and artifacts from the 8th century.",
        image:
          "https://images.pexels.com/photos/7691105/pexels-photo-7691105.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Heritage",
      },
      {
        name: "Netaji Birthplace Museum",
        description:
          "The ancestral home of Subhas Chandra Bose, now a museum. Displays personal belongings, letters, and photographs of one of India's greatest freedom fighters.",
        image:
          "https://images.pexels.com/photos/7691105/pexels-photo-7691105.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Museum",
      },
      {
        name: "Durga Puja Pandals",
        description:
          "Cuttack's Durga Puja is legendary — the silver and gold tableaux (medha) at Choudhury Bazaar and Sheikh Bazaar are among the most spectacular in India.",
        image:
          "https://images.pexels.com/photos/7691105/pexels-photo-7691105.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Festival",
      },
    ],
  },
  {
    id: "ganga-sagar",
    name: "Ganga Sagar",
    tagline: "Where the Ganga Meets the Sea",
    image: Gangasagar,
    description:
      "Ganga Sagar (Sagar Island) is the sacred point where the River Ganga meets the Bay of Bengal. One of the holiest Hindu pilgrimage sites, the annual Ganga Sagar Mela draws millions of devotees for a holy dip at the confluence.",
    attractions: [
      {
        name: "Ganga Sagar Confluence",
        description:
          "The sacred meeting point of the Ganga and the Bay of Bengal. Taking a holy dip here during Makar Sankranti (January) is considered as meritorious as a Kumbh bath.",
        image:
          "https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Pilgrimage",
      },
      {
        name: "Kapil Muni Ashram",
        description:
          "An ancient ashram at the confluence, believed to be where Sage Kapil meditated. The temple here is the focal point of the Ganga Sagar Mela pilgrimage.",
        image:
          "https://images.pexels.com/photos/5459656/pexels-photo-5459656.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Spiritual",
      },
      {
        name: "Ganga Sagar Mela",
        description:
          "India's second-largest pilgrimage gathering after the Kumbh Mela. Held every January, it draws 2-3 million devotees for the sacred dip at the confluence.",
        image:
          "https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Festival",
      },
      {
        name: "Sagar Island Beaches",
        description:
          "The island has pristine, untouched beaches along the Bay of Bengal. Far from tourist crowds, they offer solitude, fishing village culture, and stunning sunsets.",
        image:
          "https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Beach",
      },
      {
        name: "Chemaguri Ferry Route",
        description:
          "The ferry from Kolkata to Sagar Island via Chemaguri is an experience in itself — crossing the Hooghly River with views of mangroves and fishing boats.",
        image:
          "https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg?auto=compress&cs=tinysrgb&w=400",
        type: "Experience",
      },
    ],
  },
];

export const ecoRetreats = [
  {
    id: "eco-retreat-hirakud",
    name: "Eco Retreat Hirakud",
    location: "Hirakud, Sambalpur",
    image: Hirakud,
    description:
      "Set on the banks of the mighty Hirakud Dam — one of the longest earthen dams in the world — Eco Retreat Hirakud offers luxury glamping with stunning reservoir views. Wake up to misty waters, migratory birds, and the gentle hum of nature.",
    season: "October to March",
    price: "₹5,999",
    activities: [
      "Boat Ride on Hirakud Reservoir",
      "Bird Watching",
      "Sunset Cruise",
      "Village Walk",
      "Cultural Evening",
      "Fishing Experience",
    ],
    accommodation: [
      "Luxury Swiss Tents",
      "Premium Cottages",
      "All Meals Included",
      "Bonfire Area",
      "Open-air Dining",
    ],
    highlights: [
      "Longest Earthen Dam Views",
      "Migratory Bird Spectacle",
      "Sunset Over Reservoir",
      "Western Odisha Culture",
    ],
  },
  {
    id: "eco-retreat-putsil",
    name: "Eco Retreat Putsil",
    location: "Putsil, Koraput",
    image: Putsil,
    description:
      "Nestled in the Eastern Ghats of Koraput, Eco Retreat Putsil is a mountain retreat surrounded by coffee plantations, tribal villages, and mist-covered valleys. This is where luxury meets the raw beauty of tribal Odisha.",
    season: "October to March",
    price: "₹6,499",
    activities: [
      "Tribal Village Visit",
      "Coffee Plantation Walk",
      "Trekking",
      "Waterfall Hike",
      "Star Gazing",
      "Tribal Dance Performance",
    ],
    accommodation: [
      "Luxury Tents",
      "Mountain View Cottages",
      "All Meals Included",
      "Bonfire & BBQ",
      "Stargazing Deck",
    ],
    highlights: [
      "Eastern Ghats Panorama",
      "Coffee Plantation Stay",
      "Tribal Culture Immersion",
      "Zero Light Pollution Stargazing",
    ],
  },
  {
    id: "eco-retreat-bhitarkanika",
    name: "Eco Retreat Bhitarkanika",
    location: "Kendrapara",
    image: BhitarkanikaRetreat,
    description:
      "Glamping in the heart of India's Amazon — Bhitarkanika. Luxury tents surrounded by mangrove forests, where the sounds of nature replace city noise. Wake up to kingfisher calls and crocodile sightings from your tent.",
    season: "October to March",
    price: "₹7,499",
    activities: [
      "Mangrove Boat Safari",
      "Crocodile Spotting",
      "Bird Watching",
      "Nature Trail",
      "Village Walk",
      "Campfire Stories",
    ],
    accommodation: [
      "Luxury Safari Tents",
      "Forest View Cottages",
      "All Meals Included",
      "Nature Library",
      "Open-air Dining",
    ],
    highlights: [
      "Mangrove Ecosystem",
      "Saltwater Crocodiles",
      "Rare Bird Species",
      "Eco-friendly Operations",
    ],
  },
  {
    id: "eco-retreat-konark",
    name: "Eco Retreat Konark",
    location: "Konark, Puri",
    image: KonarkRetreat,
    description:
      "Beachside luxury camping near the Sun Temple. Eco Retreat Konark combines the spiritual heritage of the UNESCO site with the relaxation of a beach holiday — all wrapped in sustainable luxury.",
    season: "October to March",
    price: "₹6,999",
    activities: [
      "Beach Walk",
      "Sun Temple Visit",
      "Cycling Tour",
      "Sand Art Workshop",
      "Yoga Session",
      "Cultural Show",
    ],
    accommodation: [
      "Beach-facing Tents",
      "Premium Cottages",
      "All Meals Included",
      "Beach Lounge",
      "Spa Area",
    ],
    highlights: [
      "UNESCO Temple Proximity",
      "Beachfront Location",
      "Sunrise Yoga",
      "Sand Art Experience",
    ],
  },
  {
    id: "eco-retreat-daringbadi",
    name: "Eco Retreat Daringbadi",
    location: "Daringbadi, Kandhamal",
    image: Daringbadi,
    description:
      'Known as the "Kashmir of Odisha," Daringbadi is a hill station at 3,000 ft with pine forests, coffee gardens, and a cool climate year-round. Eco Retreat Daringbadi offers a mountain escape unlike any other in Odisha.',
    season: "October to June",
    price: "₹5,499",
    activities: [
      "Coffee Garden Walk",
      "Pine Forest Trek",
      "Hill View Point",
      "Waterfall Visit",
      "Tribal Market Tour",
      "Campfire Evening",
    ],
    accommodation: [
      "Luxury Hill Tents",
      "Cottage Rooms",
      "All Meals Included",
      "Bonfire Area",
      "Mountain View Deck",
    ],
    highlights: [
      "Hill Station Climate",
      "Pine Forests",
      "Coffee Gardens",
      "Tribal Kandha Culture",
    ],
  },
  {
    id: "eco-retreat-sonapur",
    name: "Eco Retreat Sonapur",
    location: "Sonapur Beach, Ganjam",
    image: Sonapur,
    description:
      'Popularly known as the "Golden Beach of Odisha," Sonapur is where the Bahuda River meets the Bay of Bengal. Eco Retreat Sonapur offers serene beachside luxury surrounded by untouched coastline, fishing villages, and breathtaking sunsets.',
    season: "October to March",
    price: "₹6,499",
    activities: [
      "Beach Walk",
      "Sunset Viewing",
      "Boat Ride",
      "Fishing Village Tour",
      "Bonfire Night",
      "Water Sports",
    ],
    accommodation: [
      "Luxury Beach Tents",
      "Sea View Deck",
      "All Meals Included",
      "Private Sit-Out Area",
      "Beachside Dining",
    ],
    highlights: [
      "Golden Sand Beach",
      "River-Sea Confluence",
      "Peaceful Atmosphere",
      "Scenic Sunsets",
    ],
  },
  {
    id: "eco-retreat-satkosia",
    name: "Eco Retreat Satkosia",
    location: "Satkosia Gorge, Angul",
    image: Satkosia,
    description:
      "Nestled beside the majestic Mahanadi River, Satkosia is one of Odisha’s most stunning eco-tourism destinations. Eco Retreat Satkosia combines luxury camping with dense forests, wildlife experiences, river adventures, and breathtaking gorge landscapes.",
    season: "October to March",
    price: "₹7,499",
    activities: [
      "River Rafting",
      "Jungle Safari",
      "Nature Trail",
      "Bird Watching",
      "Campfire Evening",
      "Boating",
    ],
    accommodation: [
      "Luxury Riverside Tents",
      "Forest View Deck",
      "All Meals Included",
      "Bonfire Area",
      "Adventure Activity Zone",
    ],
    highlights: [
      "Satkosia Gorge",
      "Mahanadi River",
      "Wildlife Sanctuary",
      "Dense Forest Experience",
    ],
  },
];
