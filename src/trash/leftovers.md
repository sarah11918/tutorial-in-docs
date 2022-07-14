<!-- ## Constructing the page template

Now that Astro knows which pages to build, and which props to pass to each page, our page template still needs to **receive** the props, like any Astro page. The will be added to the component script, below `getStaticPaths()`.

#### Try it yourself!

1. Write the line of code that an Astro page needs to receive the posts as the props from `getStaticPaths()`

<details>
<summary>Show the code</summary>
```astro
---
const { posts } = Astro.props
---
```
</details>

2. Write the line of code that an Astro page needs to receive the name of the tag from the parameter `getStaticPaths()`

<details>
<summary>Show the code</summary>
```astro
---
const { tag } = Astro.params
---
```
</details>

Now we can define the template of each individual tag page, and we have available to us:

- the name of the tag itself ( `tag` )
- all the content and properties of every `.md` file that contains that tag in an array (`post`)

Update the page template to include the same information used to create our list of all blog posts on our Blog page:

```diff
<BaseLayout title={title}>
   
        <p>Posts tagged with {title}</p>

+        <ul>
+           {posts.map(post => <li><a href={post.url}>{post.frontmatter.title}</a></li>)}
+        </ul>


</BaseLayout>
```

You can even refactor this to use our BlogPost component instead! (Don't forget to import this component at the top of `[tag].astro`, with your layout!)

```diff
<BaseLayout title={title}>
   
        <p>Posts tagged with {title}</p>

        <ul>
-          {posts.map(post => <li><a href={post.url}>{post.frontmatter.title}</a></li>)}        
+          {posts.map(post => <BlogPost url={post.url} title={post.frontmatter.title}/>)}
       </ul>


</BaseLayout>
```

There is one more update to this page we should make. Can you spot it!

<details>
<summary>Give me a hint</summary>
How is your page's title defined in your script?


<details>
<summary>Give me another hint!</summary>
We would like the page title to be the name of the tag, not just the word "tag."

<details>
<summary>Show me the code!</summary>

```diff
const { posts } = Astro.props;
const { tag } = Astro.params;

-let title = "tag"; 
+let title = tag; 
```
</details>

</details>

</details> -->