import React from "react";
import "../stylesheets/pages/about.scss"

const Home = () => {
    return (
        <>
            <h2 id="helloworld" className="title">Hi! My name is <span className="about-span">u</span>
                <span className="about-span">p</span>
                <span className="about-span">t</span>
                <span className="about-span">u</span>
                .</h2>
            <p className="smaller title-break">(not really but I'm not telling you it because you shouldn't use your real name
                online)</p>
            <div>
                    <p>
                        I'm a passionate developer with over a decade of coding experience as a hobbyist. I have primarily worked with OOP languages such as Java and C# in the past, but have recently forayed into web development, where I have taken to it quickly, thanks to my prior experience tinkering with web dev as a teen.

My language of choice is now Rust, which I have been using for the last few months. Rust provides me with low-level control, clang-like LLVM compiling, WASM support, and the immensely useful borrow checker, making it a powerful language. I'm currently using Rust as my daily driver for developing games using the Bevy ECS framework, which provides me with just enough abstraction over raw OpenGL and WebGPU commands while still delivering a stripped-down, light and performant experience.
                    </p>
                    <p>
                        I am also a musician with <strong className="strong-accent">17</strong> years of experience playing guitar, bass, and synths.
                        I started playing guitar at <strong className="strong-accent">6</strong>, bass at somewhere around <strong className="strong-accent">10</strong> years old, and keyboards/synthesis at around <strong className="strong-accent">12</strong> years old.
                        While I tend to produce music in the <em>Drum n' Bass</em> and <em>Jungle</em> genres, I have made projects for pretty much any genre under the sun. I enjoy listening to different genres depending on my mood, typically Jazz, Drum n' Bass, Metal, or Rap, although I also have playlists for Blues/Bluegrass/Folk, Ambient, and other genres I like; they're for more niche moods.
                    </p>

                <div className="box">
                    <h3>Languages I Know</h3>
                    <p className="smaller sideline">(All experience listed is amateur; I haven't had the pleasure of
                        working as a dev yet.)</p>
                    <ul className="p language-grid">
                        <li className="biglist">
                            <div>
                                <p className="single_line lang_header"><strong>Java</strong> - <em>10 years;</em></p>
                                
                                <p className="single_line lang_body">
                                My first programming language learned. Little
                                uptu thought that Java was going to overtake C/C++ because of that sweet sweet JVM.
                                <br />
                                <br />
                                I originally learned Java to make mods for a little-known indie game named Minecraft, which I was a fan of from around beta 1.7.3.
                                </p>
                            </div>
                        </li>
                        <br/>
                        <li className="biglist">
                            <div>
                                <p className="single_line lang_header"><strong>Rust</strong> - <em>Learning;</em></p>
                                
                                <p className="single_line lang_body">
                                I'm currently using
                                rust as my daily driver, as it provides some nifty low-level
                                support, and polling has shown that most programmers love Rust
                                more than their own mothers. Currently, I'm developing games
                                using the <a href="https://bevyengine.org/">Bevy</a> framework.
                                </p>
                            </div>
                        </li>
                        <br/>
                        <li className="biglist">
                            <div>
                                <p className="single_line lang_header"><strong>HTML/CSS/JS</strong> - <em>~5 years;</em></p>
                                
                                <p className="lang_body">                                        I learned CSS primarily to modify a
                                        stylesheet on a subreddit I moderated, which I was migrating to use Naut with some tweaks. 
                                        <br />
                                        I have less experience with JavaScript, although I have been
                                        actively learning TypeScript recently to code this website, primarily
                                        using React as a framework.
                                </p>
                            </div>
                        </li>
                        <br/>
                        <li className="biglist">
                            <div>
                                <p className="single_line lang_header"><strong>C#</strong> - <em>~5 years;</em></p>
                                
                                <p className="single_line lang_body">
                                    I wanted to try out Visual Studio (at the time
                                    I was unaware of the fledgling VS Code as an Eclipse user), and decided
                                    learning C# would be a good intro to the C family. I quickly learned that I had already
                                    learned C# well beforehand by learning Java, with C# being a more syntactically
                                    stripped-down version of the same general underlying concepts, feeling more like Java
                                    than C/C++. I have made a few Unity projects, and coding in it practically comes as a
                                    second nature coming from a Java background.
                                </p>
                            </div>
                        </li>
                        <br/>
                        <li className="biglist">
                            <div>
                                <p className="single_line lang_header"><strong>Python</strong> - <em>~5 years;</em></p>
                                
                                <p className="single_line lang_body">
                                Taught me how much I took curly-brace
                                syntax for granted with other languages! I have a love-hate relationship with the
                                language, as although the lack of braces makes scripting easier and faster in it, I
                                find myself making indentation errors often that become crippling where they
                                wouldn't be in other languages. I prefer my scripts in Lua or TypeScript, personally.
                                </p>
                            </div>
                        </li>
                        <br/>
                        <li className="biglist">
                            <div>
                                <p className="single_line lang_header"><strong>Bash</strong> - <em>~5 years;</em></p>
                                
                                <p className="single_line lang_body">
                                Shell scripts can be immensely
                                useful for automating many aspects of Linux development, and I personally
                                have a deploy script ready to go on my desktop, along with many other small
                                utility scripts. I am most familiar with the Debian family of distros and
                                their commands.
                                </p>
                            </div>
                        </li>
                        <br/>
                        <li className="biglist">
                            <div>
                                <p className="single_line lang_header"><strong>Lua</strong> - <em>~1 month;</em></p>
                                
                                <p className="single_line lang_body">
                                I learned it on a weekend to
                                make <a href="https://github.com/uptudev/hamisNice">a mod</a> for one of
                                my favourite games, Noita. I can't even say I know the language, as it
                                was a trial-by-fire where I was too busy trying to figure out Noita's
                                poorly-documented mod API to actually note anything about it otherwise.
                                Unfortunately the aforementioned API issues left a bad taste in my
                                mouth, and I've avoided doing much more modding in Noita than a small 
                                mod that spawns some perks.
                                </p>
                            </div>
                        </li>
                        <br/>
                        <li className="biglist">
                            <div>
                                <p className="single_line lang_header"><strong>Go</strong> - <em>Looking Into;</em></p>
                                
                                <p className="single_line lang_body">
                                I originally wanted to
                                learn C++ as my next language after learning TypeScript, however
                                I've noticed Go getting some traction as of recent as a potential
                                successor to C++, and may look to it as a possible replacement for
                                most purposes.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                    <h3>About this website</h3>
                    <p>
                        I recently decided to make a portfolio website to showcase my web dev skills (and host WASM
                        verisons of
                        games I make), with the decision between using <a href="https://yew.rs/">Yew</a>, <a
                        href="https://vuejs.org/">Vue.js 3</a>, and <a href="https://react.dev/">React</a> being more
                        difficult
                        than expected.
                        At the end of the day, I ended up using React, with the prototype of my website having been
                        originally
                        written in Vue.js (and thus requiring rewriting).
                        React's interoperability with TypeScript via .tsx files allows for Rust-esque static typing,
                        which makes
                        my functions feel more like Rust than vanilla ECMAScript.
                        <br />
                        <br />
                        The stack for the website is as follows:
                        <div className="box">
                            <ul>
                                <li className="techstack">React (with TypeScript)</li>
                                <li className="techstack">SASS</li>
                                <li className="techstack">Firebase Realtime Database</li>
                            </ul>
                        </div>
                    </p>
                </div>
                    <h3>Contact Me</h3>
                    <p id="email" className="single_line contact">
                        <strong>
                            Email
                        </strong>
                        : <a href="mailto:uptu@uptu.dev">
                        uptu@uptu.dev
                    </a>
                    </p>
                    <p id="github" className="single_line contact">
                        <strong>
                            Github
                        </strong>
                        : <a href="https://github.com/uptudev/">
                        uptudev
                    </a>
                    </p>
        </>
    );
};
  
  export default Home;
  
