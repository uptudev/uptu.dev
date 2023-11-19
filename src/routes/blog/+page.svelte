<div class="posts">
	<div class="box blog-post">
		<div class="blog-post-header"><h2>How to Tell if an i32 is a Palindrome</h2></div>
		<div class="blog-contents">
			<p>
				While going through LeetCode problems today, I realized I had skimmed over a conceptually
				simple problem while focusing on interview problems: <strong
					>problem #9, Palindrome Number</strong
				>, which has a prompt reading as follows:
			</p>
			<blockquote>
				<p>Given an integer x, return true if x is a palindrome, &amp; false otherwise.</p>
			</blockquote>
			<p>
				This is a very simple problem that is made more challenging by following their recommended
				constraint of <em>not</em> using strings, as it is—<em>frankly</em>—pretty damn simple with
				them.
			</p>
			<hr />
			<p>
				For example, a solution in Rust which uses strings to index into digits would look like the
				following:
			</p>
			<pre>
<code class="language-rust">
pub fn is_palindrome(mut x: i32) -&gt; bool &#123;
    // Early return because no negative numbers can be palindromes
    if x.is_negative() &#123;return false&#125;

    // Single digits are inherently palindromic
    if x / 10 == 0 &#123;return true&#125;
    
    let s: Vec&lt;char&gt; = x.to_string().chars().collect();
    let s_max = x.to_string().len() - 1;
    let mut c: usize = 0;

    let mut left = s[c];
    let mut right = s[s_max];

    while left == right &#123;
        if c == s_max-c || c == x.to_string().len()-c &#123;return true&#125;
 
        c += 1;
        left = s[c];
        right = s[s_max-c];
    &#125;

    false
&#125;
</code></pre>
			<p>
				This is a fine example of a <em>two-pointer</em> solution to the problem, but an application
				of it which doesn't fit the task at hand.
			</p>
			<p>
				All the type casting &amp; heap use means the above solution will be utter trash in both
				time and space complexity compared to a purely numeric solution which uses arithmetic
				operators on values in the stack and registers, and subsequently doesn't index into heap
				memory.
			</p>
			<p>Take the snippet:</p>
			<pre><code class="language-rust"
					>let s: Vec&lt;char&gt; = x.to_string().chars().collect();</code
				></pre>
			<p>
				Which takes the input <code>i32</code> value <code>x</code>, then parses it into a
				<code>String</code>, which is then decomposed into <code>Chars&lt;_&gt;</code> &amp;
				reassembled into a <code>Vec&lt;char&gt;</code> on the heap. This is a costly function which
				is both <strong>slow</strong> in accessing and mutating the memory in use by the program and
				<strong>wholly unnecessary</strong> for the task at hand.
			</p>
			<hr />
			<p>
				To think of it numerically, we need to be cognizant of the system in which we as strange
				internet apes use to represent numeric data, the decimal system. Knowing how a <strong
					>base 10</strong
				> numeric system works is key to solving a question like this without needing to index into characters
				&amp; other stupid methods like that.
			</p>
			<p>
				In every programming language I can think of other than <em>Brainfuck</em>, there exists a
				modulo operator (<code>%</code>), a division operator (<code>/</code>), &amp; an addition
				operator (<code>+</code>) which allow for some version of this algorithm to function.
			</p>
			<p>
				It simply relies on the fact that digits can be "stored" within a second <code>i32</code>
				value by pushing the existing digits to the left one space &amp; adding the digit to be
				stored to that value, subsequently implementing a weird pseudo-stack within an
				<code>i32</code> value.
			</p>
			<p>
				In order to add a digit to a second integer, we simply multiply the current value by 10 to
				push all digits one space left (<code>y * 10</code>), then take that value &amp; add the
				least significant digit of the initial integer, which we can get by simply executing a
				<em>mod10</em>
				operation (<code>x % 10</code>). After removing the least significant digit from the first
				integer using integer division (<code>x / 10</code>), we have successfully taken the lowest
				digit in one integer and pushed it into another.
			</p>
			<p>
				The operations detailed above in a C-like language on two initialized <code>long</code> values
				would look like the following snippet:
			</p>
			<pre><code class="language-c"
					>y = y * 10 + x % 10;
x = x / 10;</code
				></pre>
			<hr />
			<p>Here is an implementation in Rust of the above concepts:</p>
			<pre><code class="language-rust"
					>pub fn is_palindrome(mut x: i32) -&gt; bool &#123;
    // Early return because negative numbers can't be palindromes
    if x.is_negative() &#123;return false&#125;

    // Single digits are palindromic
    if x / 10 == 0 &#123;return true&#125;

    // Trailing zeros break the algorithm and can't be palindromic
    if x % 10 == 0 &#123;return false&#125;

    let mut half: i32 = 0;

    while x &gt; half &#123;
        half = half * 10 + x % 10;
        x = x / 10;
    &#125;

    // Even digit palindromes return here
    if x == half &#123;return true&#125;
        
    // Odd digit palindromes return here
    if half / 10 != 0 &amp;&amp; (x * 10 + half % 10) == half &#123;return true&#125;
        
    // All other cases aren't palindromic
    false
&#125;</code
				></pre>
		</div>
		<p class="timestamp">2023-05-29, 23:23:07.319 UTC</p>
	</div>
	<br />
	<div class="box blog-post">
		<div class="blog-post-header"><h2>On Synthesis of Sound and Logic</h2></div>
		<div class="blog-contents">
			<p>
				As a seasoned musician and programmer, I've discovered intriguing parallels between these
				two disciplines in how they approach the fundamental concepts behind their core tools. Just
				as there are diverse styles of synthesizers, programming languages also come in various
				flavors. Within both realms, we find the fusion of synthesis methods in sound and
				programming paradigms, respectively. Synthesizers like XferRecords' Serum and programming
				languages like Rust serve as compelling examples of this synergy.
			</p>
			<h2>Serum and Rust</h2>
			<p>
				Let's delve into Serum, a widely acclaimed synthesizer in the EDM scene. Developed by Steve
				Duda, Serum combines subtractive, FM, and wavetable synthesis techniques. Drawing
				inspiration from Native Instruments' Massive, Serum employs wavetable-based oscillators that
				can be further modulated and processed using filters and effects.
			</p>
			<p>
				That's a bunch of words that make little sense for anyone who hasn't done much of a deep
				dive into electronic audio synthesis, but the main takeaway is that Serum's design utilizes
				aspects of numerous synthesis methods in order to make a synth that is greater than the sum
				of its parts. This is paralleled in languages like Rust, which utilize multiple paradigms in
				order to provide a more modular and less tied-down programming experience that can feel more
				cohesive than a strictly object-oriented programming language or strictly functional
				programming language. A wonderful example of that can be found in the code examples used by
				code_report in <a href="https://www.youtube.com/watch?v=wGCWlI4A5z4" target="_blank"
					>his video</a
				>
				on Rust's paradigms, which get the sum of all even numbers in the range from
				<code>bottom</code>
				to <code>top</code>.
			</p>
			<h2>How Different Languages Approach Paradigms</h2>
			<p>
				We'll start with a straightforward C implementation for calculating the sum of even numbers
				within a range:
			</p>
			<pre><code class="language-c"
					>int calculate(int bottom, int top) &#123; 
    if (top &gt; bottom) &#123; 
        int sum = 0; 
        for (int number = bottom; number &lt;= top; number++) &#123; 
            if (number % 2 == 0) &#123; 
                sum += number; 
            &#125; 
        &#125; 
        return sum; 
    &#125; else &#123; 
        return 0; 
    &#125;
&#125;</code
				></pre>
			<p>
				While this C code is readable, the following C++ version, despite being object-oriented,
				becomes less legible due to intricate optimizations and reliance on the standard library:
			</p>
			<pre><code class="language-cpp"
					>int calculate(int bottom, int top) &#123; 
return top &lt;= bottom ? 0 : 
    ranges.accumulate( 
        std::views::iota(bottom, top + 1) | 
        std::views::filter([](auto e) &#123; return e % 2 == 0; &#125;), 0);
&#125;</code
				></pre>
			<p>
				Now, I mean no offense to code_report when I ask how anyone is supposed to infer the same
				concepts behind both snippets when the C++ version is obfuscated behind vague library calls
				like <code>iota()</code> and <code>accumulate()</code>, which mean absolutely nothing
				without diving into the standard library. This is all due to the fact that C++ requires
				certain circumventions in order to accomplish an iteration-heavy task traditionally
				processed in a functional language.
			</p>
			<p>
				In contrast, the Haskell version showcases how a language optimized for functional
				programming can express the solution concisely:
			</p>
			<pre><code class="language-haskell"
					>calculate :: Int -&gt; Int -&gt; Int
calculate bottom top = sum $ filter even [bottom..top]</code
				></pre>
			<p>
				Although I don't really understand the syntax of the <code
					>calculate :: Int -&gt; Int -&gt; Int</code
				>
				line as someone who hasn't used Haskell, the second line exemplifies how a solution can be
				both terse and readable when the proper paradigm is used for the task at hand. Someone
				looking at the function can clearly see that it returns the sum of all even numbers filtered
				from the set <code>[bottom..top]</code>, something easily taken for granted before looking
				at the C++ version again.
			</p>
			<p>
				Now, let's turn our attention to Rust—a language that empowers developers to choose the most
				suitable paradigm for their task. It offers the flexibility to work with objects and methods
				when needed, or utilize functional concepts for iterating over sets efficiently. Here's a
				Rust implementation of the same calculation:
			</p>
			<pre><code class="language-rust"
					>fn calculate(bottom: i32, top: i32) -&gt; i32 &#123; 
    (bottom..=top) // Over a set from bottom to top, inclusive 
        .filter(|e| e % 2 == 0) // Filter out all elements `e` that aren't even 
        .sum() // Then sum to an `i32`, which is then returned by inferrence
&#125;</code
				></pre>
			<p>
				This Rust code strikes a balance, offering concise syntax reminiscent of C while leveraging
				functional capabilities. Notably, it outperforms the other versions in terms of code size
				and runtime efficiency.
			</p>
			<h2>Why does this matter?</h2>
			<p>
				In the past, developers had to learn various languages for different purposes. However, the
				emergence of multi-paradigm languages has revolutionized the programming landscape. Rust, in
				particular, embodies this shift by offering a unified approach for both data-intensive
				functional work and object-oriented programming. Employers no longer need to train employees
				in multiple languages when one language can handle diverse tasks effectively. This aspect,
				coupled with Rust's memory management features, has contributed to its growing popularity
				and makes it an enticing alternative to traditional languages like C++.
			</p>
			<p>
				As I reflect on my own journey as a programmer, starting with Java's object-oriented
				paradigm, I'm eager to embrace the era of multi-paradigm languages. Just as multi-paradigm
				synthesizers have enriched the music industry, these versatile programming languages hold
				tremendous potential in the realm of software development.
			</p>
			<p>
				Feel free to explore the code snippets provided and witness firsthand how different
				languages approach paradigms, enabling us to express our ideas in various ways.
			</p>
		</div>
		<p class="timestamp">2023-05-17, 17:57:51.915 UTC</p>
	</div>
	<br />
</div>

<style lang="scss">
	@import url('/src/stylesheets/pages/blog.scss');
	@import url('/src/stylesheets/base/text.scss');
</style>
