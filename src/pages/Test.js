import React, { useEffect, useState } from 'react'

export default function Test() {
    const [isScrolling, setState] = useState(false)

    const onScroll = () => {
        window.scrollY > 500 ? setState(true) : setState(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])







    return (
        <section className='text-center text-white relative'>
            {isScrolling
                ? <div className={`bg-green-500 py-4 fixed w-full`}>Shown</div>
                : <div className={`bg-blue-500 py-4 fixed w-full`}>Hide</div>}
            <p className='w-1/3 mx-auto text-black'>
                Using the jQuery scroll () function to find the scroll position and show/hide DIV on mouse scroll up or down. Show some particular div on page after scrolling ...

                How to scroll element into view when it's clicked - Codding ...https://coddingbuddy.com › article › ho...
                Dịch trang này
                Element.scrollIntoView(), Scrolling to an element can be achieved in Javascript using the scrollIntoView() method. Smooth animation and customizing the ...

                Show element when scroll down - Uncaught TypeError - The ...https://forum.freecodecamp.org › show-...
                Dịch trang này
                28 thg 10, 2021 — Hi Friends! I am trying to create a sticky button which shows up when scrolling down for 100px, but I have problems to figure out whats ...

                Show/Hide Element on Scroll Using Javascript Only - Pretaghttps://pretagteam.com › question › sho...
                Dịch trang này
                16 thg 10, 2021 — It finds the mouse scroll position whether it's scrolling up or down to display or hide the div element on scroll. show().

                Reveal on scroll | Webflow Universityhttps://university.webflow.com › lesson· Dịch trang này
                Select your trigger element (e.g., Project Link) and click into the Interactions panel; Click the plus sign next to Element Trigger; Choose Scroll Into View ...
                16 thg 4, 2014 · Tải lên bởi Webflow

                Using the jQuery scroll () function to find the scroll position and show/hide DIV on mouse scroll up or down. Show some particular div on page after scrolling ...

                How to scroll element into view when it's clicked - Codding ...https://coddingbuddy.com › article › ho...
                Dịch trang này
                Element.scrollIntoView(), Scrolling to an element can be achieved in Javascript using the scrollIntoView() method. Smooth animation and customizing the ...

                Show element when scroll down - Uncaught TypeError - The ...https://forum.freecodecamp.org › show-...
                Dịch trang này
                28 thg 10, 2021 — Hi Friends! I am trying to create a sticky button which shows up when scrolling down for 100px, but I have problems to figure out whats ...

                Show/Hide Element on Scroll Using Javascript Only - Pretaghttps://pretagteam.com › question › sho...
                Dịch trang này
                16 thg 10, 2021 — It finds the mouse scroll position whether it's scrolling up or down to display or hide the div element on scroll. show().

                Reveal on scroll | Webflow Universityhttps://university.webflow.com › lesson· Dịch trang này
                Select your trigger element (e.g., Project Link) and click into the Interactions panel; Click the plus sign next to Element Trigger; Choose Scroll Into View ...
                16 thg 4, 2014 · Tải lên bởi Webflow

                Using the jQuery scroll () function to find the scroll position and show/hide DIV on mouse scroll up or down. Show some particular div on page after scrolling ...

                How to scroll element into view when it's clicked - Codding ...https://coddingbuddy.com › article › ho...
                Dịch trang này
                Element.scrollIntoView(), Scrolling to an element can be achieved in Javascript using the scrollIntoView() method. Smooth animation and customizing the ...

                Show element when scroll down - Uncaught TypeError - The ...https://forum.freecodecamp.org › show-...
                Dịch trang này
                28 thg 10, 2021 — Hi Friends! I am trying to create a sticky button which shows up when scrolling down for 100px, but I have problems to figure out whats ...

                Show/Hide Element on Scroll Using Javascript Only - Pretaghttps://pretagteam.com › question › sho...
                Dịch trang này
                16 thg 10, 2021 — It finds the mouse scroll position whether it's scrolling up or down to display or hide the div element on scroll. show().

                Reveal on scroll | Webflow Universityhttps://university.webflow.com › lesson· Dịch trang này
                Select your trigger element (e.g., Project Link) and click into the Interactions panel; Click the plus sign next to Element Trigger; Choose Scroll Into View ...
                16 thg 4, 2014 · Tải lên bởi Webflow

                Show/Hide Element on Scroll Using Javascript Only - Pretaghttps://pretagteam.com › question › sho...
                Dịch trang này
                16 thg 10, 2021 — It finds the mouse scroll position whether it's scrolling up or down to display or hide the div element on scroll. show().

                Reveal on scroll | Webflow Universityhttps://university.webflow.com › lesson· Dịch trang này
                Select your trigger element (e.g., Project Link) and click into the Interactions panel; Click the plus sign next to Element Trigger; Choose Scroll Into View ...
                16 thg 4, 2014 · Tải lên bởi Webflow

                Using the jQuery scroll () function to find the scroll position and show/hide DIV on mouse scroll up or down. Show some particular div on page after scrolling ...

                How to scroll element into view when it's clicked - Codding ...https://coddingbuddy.com › article › ho...
                Dịch trang này
                Element.scrollIntoView(), Scrolling to an element can be achieved in Javascript using the scrollIntoView() method. Smooth animation and customizing the ...

                Show element when scroll down - Uncaught TypeError - The ...https://forum.freecodecamp.org › show-...
                Dịch trang này
                28 thg 10, 2021 — Hi Friends! I am trying to create a sticky button which shows up when scrolling down for 100px, but I have problems to figure out whats ...

                Show/Hide Element on Scroll Using Javascript Only - Pretaghttps://pretagteam.com › question › sho...
                Dịch trang này
                16 thg 10, 2021 — It finds the mouse scroll position whether it's scrolling up or down to display or hide the div element on scroll. show().

                Reveal on scroll | Webflow Universityhttps://university.webflow.com › lesson· Dịch trang này
                Select your trigger element (e.g., Project Link) and click into the Interactions panel; Click the plus sign next to Element Trigger; Choose Scroll Into View ...
                16 thg 4, 2014 · Tải lên bởi Webflow

                Using the jQuery scroll () function to find the scroll position and show/hide DIV on mouse scroll up or down. Show some particular div on page after scrolling ...

                How to scroll element into view when it's clicked - Codding ...https://coddingbuddy.com › article › ho...
                Dịch trang này
                Element.scrollIntoView(), Scrolling to an element can be achieved in Javascript using the scrollIntoView() method. Smooth animation and customizing the ...

                Show element when scroll down - Uncaught TypeError - The ...https://forum.freecodecamp.org › show-...
                Dịch trang này
                28 thg 10, 2021 — Hi Friends! I am trying to create a sticky button which shows up when scrolling down for 100px, but I have problems to figure out whats ...

                Show/Hide Element on Scroll Using Javascript Only - Pretaghttps://pretagteam.com › question › sho...
                Dịch trang này
                16 thg 10, 2021 — It finds the mouse scroll position whether it's scrolling up or down to display or hide the div element on scroll. show().

                Reveal on scroll | Webflow Universityhttps://university.webflow.com › lesson· Dịch trang này
                Select your trigger element (e.g., Project Link) and click into the Interactions panel; Click the plus sign next to Element Trigger; Choose Scroll Into View ...
                16 thg 4, 2014 · Tải lên bởi Webflow
            </p>
            <button className='absolute right-4 bottom-4 btn btn-primary'
                onClick={() => window.scroll(0, 0)} >Back To Top</button>
        </section>
    )
}
