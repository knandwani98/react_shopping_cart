import { connect } from "react-redux";

function Sidebar({ products }) {
  let sizes = products.reduce((acc, cv) => {
    acc = acc.concat(cv.availableSizes);
    return acc;
  }, []);
  let uniqueSizes = [...new Set(sizes)];
  return (
    <aside className="flex-20 sidebar">
      <div className="flex wrap">
        {uniqueSizes.map((size) => (
          <span key={size} className="size">
            {size}
          </span>
        ))}
      </div>
    </aside>
  );
}

function mapStateToProps(state) {
  return { allProducts: state.allProducts, counter: state.counter };
}

export default connect(mapStateToProps)(Sidebar);
