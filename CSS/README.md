I will add links and resources for CSS
---------------------------------

Attribute selectors
https://www.codecademy.com/courses/learn-css-introduction/lessons/learn-css-selectors/exercises/attribute

The attribute selector can be used to target HTML elements that already contain attributes.
The most basic syntax is an attribute surrounded by square brackets
To use the attribute selector to select the <a> element with an href attribute value containing ‘florence’,
a[href*='florence'] {
  color: lightgreen;
}

a[href*='beijing'] {
  color: lightblue;
}
a[href*='seoul'] {
  color: lightpink;
}

----------------------------
Specificity
https://www.codecademy.com/courses/learn-css-introduction/lessons/learn-css-selectors/exercises/specificity

In Specificity the chain of which attribute will be
- id
- class
- type

h5 class="author-class" id="author-id">By: Stacy Gray</h5>

h5 {
  color: yellow;
}

.author-class {
  color: pink;
}

#author-id {
  color: cornflowerblue;
}

In the example above id overrides all and the color will be cornflowerblue
-----------------------------------
Chaining
https://www.codecademy.com/courses/learn-css-introduction/lessons/learn-css-selectors/exercises/chaining

h1.special {

}
The code above would select only the <h1> elements with a class of special. If a <p> element also had a class of special, the rule in the example would not style the paragraph.

-----------------------------
Multiple Selectors
https://www.codecademy.com/courses/learn-css-introduction/lessons/learn-css-selectors/exercises/multiple-selectors

Instead of writing font-family: Georgia twice for two selectors, we can separate the selectors by a comma to apply the same style to both, like this:

h1,
.menu {
  font-family: Georgia;
}
-----------------------------
Important

https://www.codecademy.com/courses/learn-css-introduction/lessons/css-visual-rules/exercises/important

!important can be applied to specific declarations, instead of full rules. It will override any style no matter how specific it is. As a result, it should almost never be used. Once !important is used, it is very hard to override.

p {
  color: blue !important;
}

.main p {
  color: red;
}
---------------------------------
Flex is stack block style
inline-flex is side to side

-----------------
justify-content

https://www.codecademy.com/courses/learn-css-flexbox-and-grid/lessons/learn-flexbox/exercises/justify-content

Here explains more how the items are displayed

---------------------------------------------
flex-wrap
https://www.codecademy.com/courses/learn-css-flexbox-and-grid/lessons/learn-flexbox/exercises/flex-wrap

I think one of the most important topics when it comes to arranging the items in a page and make sure they are responsive.
----------------------------------------------
flex-flow
https://www.codecademy.com/courses/learn-css-flexbox-and-grid/lessons/learn-flexbox/exercises/flex-flow

And yet, flex-flow is double the power because it takes the properties on flex-wrap and flex-direction !!

.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

In the example above, we take two lines to accomplish what can be done with one.

.container {
  display: flex;
  flex-flow: column wrap;
}


