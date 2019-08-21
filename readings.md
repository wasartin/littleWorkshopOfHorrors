# Great Readings.

## General Articles
* Web
    * Articles
        * [Anatomy of the URL](https://doepud.co.uk/blog/anatomy-of-a-url)
        * [URL Definitions according to Google](https://www.mattcutts.com/blog/seo-glossary-url-definitions/)
    * Papers 
        * [Disseration on Rest by Roy T. Fielding](https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm)


## SO
https://stackoverflow.com/a/5280719
https://stackoverflow.com/questions/5226055/truly-understanding-the-difference-between-procedural-and-functional
> **Functional Programming**
> 
> Functional programming refers to the ability to treat functions as values.
> Let's consider an analogy with "regular" values.  We can take two integer values and combine them using the `+` operator to > obtain a new integer.  Or we can multiply an integer by a floating point number to get a floating point number.
> In functional programming, we can combine two function values to produce a new function value using operators like [compose][1] or [lift][2].  Or we can combine a function value and a data value to produce a new data value using operators like [map][3] or [fold][4].
> Note that many languages have functional programming capabilities -- even languages that are not usually thought of as functional languages.  Even Grandfather FORTRAN supported function values, although it did not offer much in the way of function-combining operators.  For a language to be called "functional", it needs to embrace functional programming capabilities in a big way.
> **Procedural Programming**
> Procedural programming refers to the ability to encapsulate a common sequence of instructions into a procedure so that those instructions can be invoked from many places without resorting to copy-and-paste.  As procedures were a very early development in programming, the capability is almost invariably linked with the style of programming demanded by machine- or assembly-language programming: a style that emphasizes the notion of storage locations and instructions that move data between those locations.
> **Contrast**
> The two styles are not really opposites -- they are just different from one another.  There are languages that fully embrace both styles (LISP, for example).  The following scenario may give a sense of some differences in the two styles.  Let's write some code for a nonsense requirement where we want to determine if all of the words in a list have an odd number of characters.  First, procedural style:
    function allOdd(words) {
      var result = true;
      for (var i = 0; i < length(words); ++i) {
        var len = length(words[i]);
        if (!odd(len)) {
          result = false;
          break;
        }
      }
      return result;
    }
> I'll take it as a given that this example is comprehensible.  Now, functional style:
    function allOdd(words) {
      return apply(and, map(compose(odd, length), words));
    }
> Working from the inside out, this definition does the following things:
>  1. `compose(odd, length)` combines the `odd` and `length` functions to produce a new function that determines whether the length of a string is odd.
>  2. `map(..., words)` calls that new function for each element in `words`, ultimately returning a new list of boolean values, each indicating whether the corresponding word has an odd number of characters.
>  3. `apply(and, ...)` applies the "and" operator to the resulting list, *and*-ing all of the booleans together to yield the final result.
> You can see from these examples that procedural programming is very concerned with moving values around in variables and explicitly describing the operations needed to produce the final result.  In contrast, the functional style emphasizes the combination of functions required to transform the initial input to the final output.
> The example also shows the typical relative sizes of procedural versus functional code.  Furthermore, it demonstrates that the performance characteristics of procedural code might be easier to see than that of functional code.  Consider: do the functions compute the lengths of all of the words in the list, or does each stop immediately after finding the first even length word?  On the other hand, the functional code permits a high-quality implementation to perform some pretty serious optimization since it primarily expresses intent rather than an explicit algorithm.
> **Further Reading**
> This question comes up a lot... see, for example:
>  - [What is the difference between procedural programming and functional programming?][5]
>  - [Can someone give me examples of functional programming vs imperative/procedural programming?][6]
>  - [OOP vs Functional Programming vs Procedural][7]
> John Backus' Turing award lecture spells out the motivations for functional programming in great detail:
> [Can Programming Be Liberated from the von Neumann Style?][8]
> I really shouldn't mention that paper in the present context because it gets pretty technical, pretty quickly.  I just couldn't resist because I think it is truly foundational.
> ----------
> **Addendum - 2013**
> Commentators point out that popular contemporary languages offer other styles of programming over and above procedural and functional.  Such languages often offer one or more of the following programming styles:

> - query (e.g. list comprehensions, language-integrated query)
> - dataflow (e.g. implicit iteration, bulk operations)
> - object-oriented (e.g. encapsulated data and methods)
> - language-oriented (e.g. application-specific syntax, macros)

> See the comments below for examples of how the pseudo-code examples in this response can benefit from some of the facilities available from those other styles.  In particular, the procedural example will benefit from the application of virtually any higher-level construct.
> The exhibited examples deliberately avoid mixing in these other programming styles in order to emphasize the distinction between the two styles under discussion.
  [1]: http://en.wikipedia.org/wiki/Function_composition_%28computer_science%29
  [2]: http://www.haskell.org/haskellwiki/Lifting
  [3]: http://en.wikipedia.org/wiki/Map_%28higher-order_function%29
  [4]: http://en.wikipedia.org/wiki/Fold_%28higher-order_function%29
  [5]: https://stackoverflow.com/q/23277/211232
  [6]: https://stackoverflow.com/q/3249863/211232
  [7]: https://stackoverflow.com/q/552336/211232
  [8]: http://www.stanford.edu/class/cs242/readings/backus.pdf
