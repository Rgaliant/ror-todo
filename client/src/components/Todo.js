import React from 'react'
import { Checkbox, Header, Button, Icon } from 'semantic-ui-react'

const Todo = ({ id, name, complete, deleteItem, updateItem }) => (
  <div style={styles.flex}>
    <div style={styles.flex}>
      <Checkbox 
      defaultChecked={complete} 
      onClick={ () => updateItem(id) } 
      />
      <div style={ complete ? styles.complete : {} }>
      <Header as='h2'>{ name }</Header>
      </div>
    </div>
    <Button
    icon
    color='red'
    size='tiny'
    onClick={() => deleteItem(id) }
    style={{ marginLeft: "15px" }}
    >
    <Icon name="trash" />
    </Button>
  </div>
)

const styles = {
  flex: { 
    display: 'flex',
    alignItems: 'center',
  },
  complete: {
    textDecoration: 'line-through',
    color: 'grey'
  }
}

export default Todo