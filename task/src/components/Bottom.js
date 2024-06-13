import FDA from "../components/FDA.png";
import centralware from "../components/centralware.png";

function Bottom() {
  return (
    <div className="flex flex-wrap w-fit relative top-[500px] left-80 ">
      <div>
        <img style={{ width: 500 }} src={FDA} alt="bottom"></img>
      </div>
      <div>
        <img style={{ width: 500 }} src={centralware} alt="bottom"></img>
      </div>
    </div>
  );
}

export default Bottom;
