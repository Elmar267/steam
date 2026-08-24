function CommunitySection() {
    return (
        <div className="text-white">
            <div className="max-w-[1150px] mx-auto px-5 py-14">
                <section className="flex flex-wrap items-center gap-5 my-5">
                    <div className="w-full md:w-[47%]">
                        <h2 className="text-[28px] sm:text-[32px] font-bold mb-3">Join the<br />Community</h2>
                        <p className="text-[17px] mb-3">Meet new people, join groups, form clans, chat in-game and more! With over 100 million potential friends (or enemies), the fun never stops.</p>
                        <a href="#" className="text-[#1a9fff] text-[15px] hover:text-white">Visit the Community →</a>
                    </div>
                    <div className="flex justify-center w-full md:w-[50%]">
                        <img src="https://cdn.fastly.steamstatic.com/store/about/cta_hero_community_pt3.png" alt="Community" className="w-full object-contain" />
                    </div>
                </section>

                <section className="flex flex-wrap items-center gap-5 my-5">
                    <div className="flex justify-center w-full md:w-[50%] order-1 md:order-0">
                        <img src="https://cdn.fastly.steamstatic.com/store/about/cta_hero_hardware.png" alt="Steam Hardware" className="w-full object-contain" />
                    </div>
                    <div className="w-full md:w-[47%]">
                        <h2 className="text-[28px] sm:text-[32px] font-bold mb-3">Experience<br />Steam Hardware</h2>
                        <p className="text-[17px] mb-3">We created the Steam Deck and the Valve Index headset to make gaming on the PC even better.</p>
                        <a href="#" className="text-[#1a9fff] text-[15px] hover:text-white">Experience Steam Hardware →</a>
                    </div>
                </section>

                <section className="flex flex-wrap items-center gap-5 my-5">
                    <div className="w-full md:w-[47%]">
                        <p className="text-[9px] tracking-[2px] mb-2">STEAM<span className="text-[#aaa]">WORKS</span></p>
                        <h2 className="text-[28px] sm:text-[32px] font-bold mb-3">Release your<br />Game</h2>
                        <p className="text-[17px] mb-3">Steamworks is the set of tools and services that help game developers and publishers get the most out of distributing games on Steam.</p>
                        <a href="#" className="text-[#1a9fff] text-[15px] hover:text-white">Learn about Steamworks →</a>
                    </div>
                    <div className="flex justify-center w-full md:w-[50%]">
                        <img src="https://cdn.fastly.steamstatic.com/store/about/cta_hero_steamworks.png" className="w-full object-contain" />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default CommunitySection;