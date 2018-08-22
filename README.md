# ez-table

A Vue component that displays a table with a scrollable body and fixed header. 

## Installation

```js
npm i --save-dev ez-table
```

### Browser

See demo.html file ...

### Module

```js
import ezTable from 'ez-table'
Vue.use(ezTable)
```

## Usage

Once installed, it can be used in a template as simply as:

```html
<ez-table bottom-marge=12>
    <div>Hello</div>
    <thead slot="thead">
        <th>C1</th>
        <th>C2</th>
        <th>C3</th>
    </thead>
    <tbody slot="tbody">
        <tr>
            <td nowrap>item1</td>
            <td>item2</td>
            <td nowrap>item3</td>
        </tr>
        <!-- ... -->
    </tbody>
</ez-table>
```

