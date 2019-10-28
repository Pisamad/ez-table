# ez-table

A Vue component that displays a table with a scrollable body and fixed header. 

## Compatibility browser
All browsers

## Installation

```js
npm i --save-dev ez-table
```

### Demo

<iframe
     src="https://codesandbox.io/embed/eztable-sandbox-g1f5r?fontsize=14&module=%2Fsrc%2FApp.vue&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="ezTable Sandbox"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   >
</iframe>

### Module

```js
import ezTable from 'ez-table'
Vue.use(ezTable)
```

## Usage

Once installed, it can be used in a template as simply as:

```html
<ez-table bottom-marge=12>
  <thead slot="thead">
      <th>C1</th>
      <th>C2</th>
      <th>C3</th>
  </thead>
  <tbody slot="tbody">
      <tr>
          <td>item1</td>
          <td>item2</td>
          <td>item3</td>
      </tr>
      <!-- ... -->
  </tbody>
</ez-table>
```
Columns header width will be synchronized with columns body width.

```bottomMarge``` is the value (px) under the table triggering the scrollbar. 
