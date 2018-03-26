Trulia Take Home Test
=====================

### Usage

Clone the repo.

Install the dependencies and start the server.
```
npm install
npm start
open http://localhost:3000
```


Zillow Group is a real estate company, so the property card component will be used across multiple applications and platforms. Think about ease of re-use, and how the component might behave in different contexts.

I created a small component library containing all the elements that were provided as individual default elements and as a combined property card. Based upon previous conversations I built this in react with the main goal of output being an easy copy and paste component for an engineer to utilize. 


The property images come from different sources (Zillow, Trulia, Hotpads, and more), and we don’t have direct control over image size, resolution, etc. 

I didn't account for this in this example but to solve for this in the future I would use the images as background images and set width to 100 and use background:cover. 

Are there use cases that are missing from these specs? How would you approach those? 

I wouldn't say there are use cases missing from the specs but in general the use case of how someone would utilize a component library is non-existent but would require a larger more in-depth conversation. 

What feedback do you have for the designer? Do you need more information, or are there follow-up questions that you have for the designer? 

In a real world setting I would need much less information. I would need a design file sketch/photoshop that has been signed off and could easily take it from there. 

In the future, we might want to extend this pattern to support a horizontal orientation (picture to the left of text, instead of above). Are there things you can do now to make horizontal property cards easier to support later?

In the component library, I extended the components to make things just like this to be restructured easily by breaking down the components individually and taking a modular approach. 

