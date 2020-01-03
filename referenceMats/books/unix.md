# Notes from Eric Raymond
###### The Art of UNIX Programming and The Cathedral vs the Bazaar

## The Art of UNIX Programming Book
### 17 Rules of Unix Programming Philosophy 
01. **Modularity**: Write simple parts connected by clean interfaces.

02. **Clarity:** Clarity is better than cleverness.

03. **Composition**: Design programs to be connected to other programs.

04. **Separation**: Separate policy from mechanism; separate interfaces from engines.

05. **Simplicity**: Design for simplicity; add complexity only where you must.

06. **Parsimony**: Write a big program only when it is clear by demonstration that nothing else will do.

07. **Transparency**: Design for visibility to make inspection and debuggingeasier.
 
08. **Robustness**: Robustness is the child of transparency and simplicity.

09. **Representation**: Fold knowledge into data so program logic can be stupid and robust.

10. **Least Surprise**: In interface design, always do the least surprising thing.

11. **Silence**: When a program has nothing surprising to say, it should say nothing.

12. **Repair**: When you must fail, fail noisily and as soon as possible.

13. **Economy**: Programmer time is expensive; conserve it in preference to machine time.

14. **Generation**: Avoid hand-hacking; write programs to write programs when you can.

15. **Optimization**: Prototype before polishing. Get it working before you optimize it.

16. **Diversity**: Distrust all claims for “one true way”.

17. **Extensibility**: Design for the future, because it will be here sooner than you think.


## Lessons from The Cathedral and the Bazaar

## Lessons 
01. **Lesson 1**: “Every good work of software starts by scratching a developer’s personal itch”
02. **Lesson 2**: “ Good programmers know what to write. Great ones know what to rewire (& reuse)”
03. **Lesson 3**: “Plan to throw one away: you will anyhow.” (Fred Brooks. The MMM)
04. **Lesson 4**: “If you have the right attitude, interesting problems will find you.”
05. **Lesson 5**: “When you lose interest in a program, your last duty to it is to hand it off to a competent successor.” 
07. **Lesson 7**: “Release early. Release often. And listen to your consumers.”
08. **Lesson 8**:Given a large enough beta-tester and co-developer base, almost every problem will be characterized quickly and the fix obvious to someone.”
09. **Lesson 9**: “Smart data structures and dumb code works a lot better than the other way around”
“Show me your [code] & conceal your [data structures], and I shall continue to be mystified. Show me your [data structures], and I won’t usually need your [code]; it’ll be obvious.” - Fred Brooks (MMM) on ‘flowcharts’ & ‘tables’ respectively.
10. **Lesson 10**: “If you treat your beta-testers as if they’re your most valuable resource, they will respond by becoming your most valuable resource.”
11. **Lesson 11**: “The next best thing to having good ideas is recognizing good ideas from your users. Sometimes the latter is better.” 
12. **Lesson 12**: “Often, the most striking and innovative solutions come from realizing that your concept of the problem was wrong.” 
13. **Lesson 13**: “Perfection (in design) is achieved not when there is nothing more to add, but rather when there is nothing more to take away.”
14. **Lesson 14**: “Any tool should be useful in the expected way, but a truly great tool lend itself to uses you never expected.
15. **Lesson 15**: “When writing gateway software of any kind, take pains to disturb the data stream as little as possible - and *never* throw away information unless the recipient forces you to!”
16. **Lesson 16**: “When your language is nowhere near Turing-complete, syntactic sugar can be your friend.
17. **Lesson 17**: “A security system is only as secure as its secret. Beware of pseudo-secrets.”
18. **Lesson 18** : “To solve an interesting problem, start by finding a problem that is interesting to you.”
19. **Lesson 19**: “Provided the development coordinator has a medium at least as good as the Internet, and knows how to lead without coercion, many heads are inevitably better than one."


### Notes while reading The Cathedral vs the Bazaar:
##### by Eric Raymond
- Abstract
  * Cathedral:= model of commercial world
  * Bazaar:= model of linux world. 
  * Listing loosely correlated theories & ideas.

- The Cathedral & the Bazaar
  * Linux an inherent tendency to destabilize the established system.
  * ‘Hacked’ together by a multitude of remote devs
  * The writer was already well-established in the world of Unixs. 
  * He essentially had the previous idea that large important systems needed a ‘waterfall’ method. As opposed to Linux’s 
  * “release early & often”
  * “Delegate everything you can”
  * “Be open to the point of promiscuity”
  * Which he equates to a Bazaar, a large babbling group of people.
  * The Bazaar is shockingly effective. & the Linux Env provides a wonderful foundation for good software.

- The Mail Must Get Through
  * More Credible, he lists some software project he worked on.
01. **Lesson 1**: “Every good work of software starts by scratching a developer’s personal itch”
  * He wanted access to his work email from home.
02. **Lesson 2**: “ Good programmers know what to write. Great ones know what to rewire (& reuse)”
  * Linus didn’t start from scratch, he started by recycling code & ideas that a mini unix operating system had. It was a scaffolding for the linux that would be.
  * He did the same. Used someone elses code.
03. **Lesson 3**: “Plan to throw one away: you will anyhow.” (Fred Brooks. The MMM)
  * His current code base had some issues, so he went off to work on someone elses. But that person lost interest, so he took over. 
04. **Lesson 4**: “If you have the right attitude, interesting problems will find you.”
  * He went from just doing patches to taking over a code base.
05. **Lesson 5**: “When you lose interest in a program, your last duty to it is to hand it off to a competent successor.” 
  * Which his pop client’s predecessor understand.

- The Importance of Having Users.
  * Linux has a tendency of it’s users also being developers. Who can identify problems/bugs and propose or implement fixes. 
  * **Lesson 6**: “Treating your users as co-developers is your least-hassle route to rapid code improvement & effective debugging.”
  * He is more impressed with Linux’s development model than the Linux Kernel itself. Upon noting this to Linux he responded * “I’m basically a very lazy person who likes to get credit for things other people actually do.” 
  * Emacs Lisp seems to have followed a similar development style. 

- Release Early, Release Often

07. **Lesson 7**: “Release early. Release often. And listen to your consumers.”

08. **Lesson 8**:Given a large enough beta-tester and co-developer base, almost every problem will be characterized quickly and the fix obvious to someone.”

I.e. Linus’s Law “Given enough eyeballs, all bugs are shallow”
Aka 
> “Debugging is parallelizable” -- <cite>Jeff Dutky</cite>

> “More users find more bugs.” -- <cite>Fred Brooks (MMM)</cite>

* One person can find the bug, and another can fix it.

09. **Lesson 9**: “Smart data structures and dumb code works a lot better than the other way around”
“Show me your [code] & conceal your [data structures], and I shall continue to be mystified. Show me your [data structures], and I won’t usually need your [code]; it’ll be obvious.” - Fred Brooks (MMM) on ‘flowcharts’ & ‘tables’ respectively.

10. **Lesson 10**: “If you treat your beta-testers as if they’re your most valuable resource, they will respond by becoming your most valuable resource.” 

11. **Lesson 11**: “The next best thing to having good ideas is recognizing good ideas from your users. Sometimes the latter is better.” 

12. **Lesson 12**: “Often, the most striking and innovative solutions come from realizing that your concept of the problem was wrong.” 

13. **Lesson 13**: “Perfection (in design) is achieved not when there is nothing more to add, but rather when there is nothing more to take away.” 
‘Exploration essentially by diffusion, followed by exploitation mediated by a scalable communication mechanism.’ 
Don’t be too focused in on see such that you don’t miss the real prize.

14. **Lesson 14**: “Any tool should be useful in the expected way, but a truly great tool lend itself to uses you never expected.”

15. **Lesson 15**: “When writing gateway software of any kind, take pains to disturb the data stream as little as possible - and *never* throw away information unless the recipient forces you to!”
- This made the added MIME support something a lot easier to implement. 

- A Few More Lessons From Fetchmail.

16. **Lesson 16**: “When your language is nowhere near Turing-complete, syntactic sugar can be your friend.

- Security by Obscurity
17. **Lesson 17**: “A security system is only as secure as its secret. Beware of pseudo-secrets.”

- Necessary Preconditions for the Bazaar Style
  * Don’t start with a Bazaar style of coding. Linus didn’t do it and neither should others. 
  * If plausible promise is present then community building is allowed. 
  * It should compile & convince others it has potential.
  * The Coordinator must “recognize good design ideas from others.” 
  * Must also be a good working with ‘peopleware’. 

- The Social Context of Open-Source Software.
18. **Lesson 18** : “To solve an interesting problem, start by finding a problem that is interesting to you.”

  * In a software world where programmers are not territorial, the software becomes much better. 
  * The dev in the closed environment will not do as well as the dev in an open environment. Due to feedback, bug hunts, code from another dev, and other general improvements. 
> “... the aim can be achieved only through the severe effort of many converging wills.” 
> -- <cite> Pyotr Alexeyvich Kropotkin’s Memoirs of a Revolutionist </cite>

  * The idea of a commanding style of leaders does not work well in a pool of volunteers. 
  * Apparently there was good documentation at this time. 
  
19. **Lesson 19**: “Provided the development coordinator has a medium at least as good as the Internet, and knows how to lead without coercion, many heads are inevitably better than one."

  * Ended original paper with the predication that Open-Source Software will dominate
  
- On Management and the Maginot Line (Update)
  * Some arguments have been raised that open source projects can’t deliver because they have a tendency to be short-lived. 
  * He puts forth the example that Emacs is from a bunch of random people and it is still sustained. 
  * He retorts with “what is management overhead buying?” Someone he knows lists 5 things.

- “Software Project Management has 5 functions”
01. To define goals & keep everybody pointed in the same direction.
02. Both Emacs and Linux seem fine. 
03. To monitor & make sure crucial details don’t get skipped.
04. The decentralized peer review works quite well. 
05. To motivate people to do boring but necessary drudgework.

  * Raymond deconstructing the 5 functions
    * To organize the deployment of people for best productivity
    * Open source people organize themselves.
    * To marshal resources needed to sustain the project. 
    * Open source projects die when they lose interest, not due to lack of resources or equipment. 
    * He follows up with a retort about how people in the waterfall process hate the process. 
    
 * Closes with “Enjoyment predicts efficiency”
> “Human beings generally take pleasure in a task when it falls in a sort of optimal-challenge zone; not so easy as to be boring, not too hard to achieve. A happy programmer is one who is neither under- 31 utilized nor weighed down with ill-formulated goals and stressful process friction.”

- His recommended Further Reading
  * MMM (later edition)
  * Gerald M. Weinberg’s The Psychology Of Computer Programming
  * De Marco and Lister’s Peopleware: Productive Projects and Teams (I own this!)

- Epilog: Netscape Embraces the Bazaar
  *  Netscape became Mozilla? I didn’t know that. 

- Endnotes 
  * Jon Bentley comments on Brooks’s observation with “If you plan to throw one away, you will throw away two.”
  * The idea that starting over with the right idea is more effective than trying to salvage a mess
> “John Hasler has suggested an interesting explanation for the fact that duplication of e:ort doesn’t seem to be a net drag on opensource development. He proposes what I’ll dub “Hasler’s Law”: the costs of duplicated work tend to scale sub-qadratically with team size – that is, more slowly than the planning and management overhead that would be needed to eliminate them.”

  * Note: I don’t know what this means, but I am just putting it here to decipher it later. 

  * “Wake me up when it’s done.” Is better than forcing code out premature. 
  * “Insight comes from individuals” 
  * Hoards of people do not come up with good ideas. As well as the committees of people in a corporate setting. 
  * It is an ideal “to be responsive to breakthrough insights. To nourish and reward them, and rigorously test them instead of squashing them.”
  * “Cathedrals and bazaars and other social structures can catch lighting and refine it, but they cannot make it on demand.” 
> “Organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations.” 
> -- <cite>Conway’s Law</cite>

I.e.

> “The means determine the ends”

> “Process becomes product”.

> “True communication is possible only between equals, because inferiors are more consistently rewarded for telling their superiors pleasant lies than for telling the truth.” 
> -- <cite>SNAFU Principle</cite>

* Much Better Conlusion
> “The way this plays out in conventional software development is easy to see; there are strong incentives for the inferiors to hide, ignore, and minimize problems. When this process becomes product, software is a disaster. “
