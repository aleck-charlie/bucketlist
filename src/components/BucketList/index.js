import React, {useState} from "react";

function BucketList() {
  const [bucket, setBucket] = useState("");
  const [bucketList, setBucketList] = useState([]);

  const handleChange = e => {
    setBucket(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBucketList((bucketList) => [...bucketList, bucket])
  }

  return (
    <div>
      <h1>Welcome to the Bucket Dome</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add to your bucket list" name="text" value={bucket} onChange={handleChange}/>
        <button>Add bucket list items</button>
      </form>
      <ul>
        {
          bucketList.map((item, index )=> <li key={index}>{item}</li>)
        }
      </ul>
    </div>
  )
}

export default BucketList;