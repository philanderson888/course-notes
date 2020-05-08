# Day 36 - CSS Animations

## CSS Animations

We can gracefully move from one CSS state to another using animations

Computers can move too quickly, so animations just add that touch of 'realism' to make an app more user friendly

```
div#animated{
    transition:width 1s, background-color 7s;
}
div#animated:hover{
    width:20vmin;
    background-color:#777;
}
```