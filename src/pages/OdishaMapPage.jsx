import React from 'react'
import OdishaTouristMap from '../assets/odisha-tourist-map/odisha-tourist-map2.png'
import OdishaTouristMap2 from '../assets/odisha-tourist-map/odisha-tourist-map.jpg'
import SEO from "../components/SEO"


const OdishaMapPage = () => {
    return (
        <section className="pt-30">
            <SEO
                title="Odisha Tourist Map | Explore Top Tourist Places in Odisha"
                description="Explore Odisha with our interactive tourist map. Discover famous destinations including Puri, Konark, Bhubaneswar, Chilika Lake, Daringbadi, Simlipal, tribal regions, beaches, temples, waterfalls, and heritage attractions across Odisha."
                keywords="Odisha tourist map, Odisha travel map, Odisha attractions map, tourist places in Odisha, Puri map, Konark tourist map, Bhubaneswar sightseeing map, Chilika Lake map, Odisha tourism destinations, Odisha travel guide, Odisha heritage sites, Odisha temple map"
                url="https://odishaindiatrip.com/odisha-tourist-map"
            />
            <img src={OdishaTouristMap} alt="" />
            <img src={OdishaTouristMap2} alt="" />
            <br />
            <h1>Odisha Google Map</h1>

            <iframe
                className="gmap_iframe"
                width="100%"
                height="400px"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3831731.454465124!2d82.80029385937497!3d20.30336101392595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a226aece9af3bfd%3A0x133625caa9cea81f!2sOdisha!5e0!3m2!1sen!2sin!4v1735542528084!5m2!1sen!2sin&z=8"
            ></iframe>
        </section>

    )
}

export default OdishaMapPage