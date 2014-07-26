/** @jsx React.DOM */

var Product = React.createClass({
    getInitialState: function() {
      return {
        added: false
      };
    },

    addToCart: function(e) {
      if(!this.state.added) {
        // add
        $.publish('cart.added', this.props.data);
      }
      else {
        // remove
        $.publish('cart.removed', this.props.data.id);
      }

      this.setState({
        added: !this.state.added
      });
    },

    render: function() {
        // assign to props
        var data = this.props.data;

        return (
          <div className="thumbnail">
            <img src={data.image} alt="product image" />
            <div className="caption clearfix">
              <h3><a href={data.url}>{data.name}</a></h3>
              <div className="product__price">{data.price} {data.currency}</div>
              <div className="product__button-wrap">
                <button className={this.state.added ? 'btn btn-danger' : 'btn btn-primary'} onClick={this.addToCart}>
                  {this.state.added ? 'Remove' : 'Add to cart'}
                </button>
              </div>
            </div>
          </div>
        );
    }
});
