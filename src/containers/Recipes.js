import React, { PureComponent } from 'react'
import Title from '../components/Title'
import RecipeItem from '../components/RecipeItem'

class Recipes extends PureComponent {

  renderRecipes(recipe, index) {
    return <RecipeItem key={index} { ...recipe } />
  }

  render() {
    return(
      <div className="recipes wrapper">
        <header>
          <Title content="Recipes" />
        </header>

        <main>
          { this.props.recipes.map(this.renderRecipes) }
        </main>
      </div>
    )
  }
}

export default Recipes
