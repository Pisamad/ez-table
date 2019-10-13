# ez-table

A Vue component that displays a table with a scrollable body and fixed header. 

## Compatibility browser
All browsers

## Installation

```js
npm i --save-dev ez-table
```

### Demo

A demo is available in demo/demo.html
https://jsfiddle.net/Pisamad/k2gqm0hj/

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
```bottomMarge``` is the value (px) under the table triggering the scrollbar. 
