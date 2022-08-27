/* import { Button, Modal, Input } from "antd";
import React, { useState } from "react";

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  function expenseCatergory(c) {
    let category = c.target.value;
    console.log(category);
  }
  function amountSpend(a) {
    let amountspend = a.target.value;
    console.log(amountspend);
  }
  function dateOfTransaction(d) {
    let date = d.target.value;
    console.log(date);
  }
  function description(des) {
    let description = des.target.value;
    console.log(description);
  }
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} className="expensebtn">
        Add Expense
      </Button>
      <Modal
        title="Add Expense"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        Expense Category
        <Input type="text" onChange={expenseCatergory} />
        <br />
        <br />
        Expense Name
        <Input type="text" onChange={expenseName} />
        <br />
        <br />
        Amount Spend
        <Input type="number" onChange={amountSpend} />
        <br />
        <br />
        Date of Transaction
        <Input type="date" onChange={dateOfTransaction} />
        <br />
        <br />
        Description
        <Input type="text" onChange={description} />
      </Modal>
    </>
  );
};

export default App; */

/* import { Button, Modal, Input } from "antd";
import React, { useState } from "react";

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  let getData = {
    category: function expenseCatergory(c) {
      let category = c.target.value;
      return JSON.stringify(category);
    },
    name: function expenseName(n) {
      let expensename = n.target.value;
      console.log(expensename);
    },
    amount: function amountSpend(a) {
      let amountspend = a.target.value;
      console.log(amountspend);
    },
    dateoftransaction: function dateOfTransaction(d) {
      let date = d.target.value;
      console.log(date);
    },
    description: function description(des) {
      let description = des.target.value;
      console.log(description);
    },
  };
  const handleOk = () => {
    setIsModalVisible(false);
    console.log(getData);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} className="expensebtn">
        Add Expense
      </Button>
      <Modal title="Add Expense" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        Expense Category
        <Input type="text" name="category"/>
        <br />
        <br />
        Expense Name
        <Input type="text"  name="name" />
        <br />
        <br />
        Amount Spend
        <Input type="number"  name="amount" />
        <br />
        <br />
        Date of Transaction
        <Input type="date"  name="dateoftransaction" />
        <br />
        <br />
        Description
        <Input type="text"  name="description" />
      </Modal>
    </>
  );
};

export default App; */


import { Button, Modal, Input } from "antd";
import React, { useState } from "react";

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  const handleOk = () => {
    setIsModalVisible(false);
    let getData = {
        category:'',
        expensename: '',
        amount: '',
        dateoftransaction: '',
        description:'',
      };
    console.log(getData);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} className="expensebtn">
        Add Expense
      </Button>
      <Modal title="Add Expense" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        Expense Category
        <Input type="text" name="category"/>
        <br />
        <br />
        Expense Name
        <Input type="text"  name="name"/>
        <br />
        <br />
        Amount Spend
        <Input type="number"  name="amount"/>
        <br />
        <br />
        Date of Transaction
        <Input type="date"  name="dateoftransaction"/>
        <br />
        <br />
        Description
        <Input type="text"  name="description"/>
      </Modal>
    </>
  );
};

export default App;

/* import { Button, Modal, Input } from "antd";
import React, { useState } from "react";

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState([
    {
      category: "",
      expensename: "",
      amount: "",
      dateoftransaction: "",
      description: ""
    },
  ]);

  const handleData = (event) =>{
    const matchName = event.getAttribute('name');
    const matchValue = event.target.value;
    const newData = {...data};
    newData[matchName] = matchValue;
    setData(newData);
  }
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} className="expensebtn">
        Add Expense
      </Button>
      <Modal title="Add Expense" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        Expense Category
        <Input type="text" name="category" onChange={handleData}/>
        <br />
        <br />
        Expense Name
        <Input type="text" name="expensename" onChange={handleData}/>
        <br />
        <br />
        Amount Spend
        <Input type="number" name="amount" onChange={handleData}/>
        <br />
        <br />
        Date of Transaction
        <Input type="date" name="dateoftransaction" onChange={handleData}/>
        <br />
        <br />
        Description
        <Input type="text" name="description" onChange={handleData}/>
      </Modal>
    </>
  );
};

export default App;

 */