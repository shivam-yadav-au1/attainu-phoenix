CREATE TABLE branch (
    branch_id serial,
    name VARCHAR(100),
    state VARCHAR(20),
    city VARCHAR(20),
    CONSTRAINT pk_branch PRIMARY KEY (branch_id)
);

CREATE TABLE customer (
    customer_id serial,
    name VARCHAR(100),
    state VARCHAR(20),
    city VARCHAR(20),
    branch_id INTEGER,
    CONSTRAINT customer_id PRIMARY KEY (customer_id),
    FOREIGN KEY (branch_id) REFERENCES branch (branch_id)
);


CREATE TABLE account(
    account_id serial,
    balance BIGINT,
    account_type VARCHAR(20),    
    customer_id INTEGER,
    CONSTRAINT account_id PRIMARY KEY (account_id),
    FOREIGN KEY (customer_id) REFERENCES customer (customer_id)
);

CREATE TABLE Financial_Transaction(
    transaction_id serial,    
    customer_id INTEGER,
    date DATE,
    mode VARCHAR(20),
    particulars VARCHAR(100),
    deposits BIGINT,
    withdrawals BIGINT,
    balance BIGINT,
    CONSTRAINT transaction_id PRIMARY KEY (transaction_id),
    FOREIGN KEY (customer_id) REFERENCES customer (customer_id)
);


CREATE TABLE loan(
    loan_id serial,    
    customer_id INTEGER,
    loan_type VARCHAR(20),
    amount BIGINT,
    paid   BIGINT,
    isActive BOOLEAN,
    CONSTRAINT loan_id PRIMARY KEY (loan_id),
    FOREIGN KEY (customer_id) REFERENCES customer (customer_id)
);

INSERT INTO branch(name, state,city) VALUES ('Allahabad Branch', 'UP','Allahabad');
INSERT INTO branch(name, state,city) VALUES ('Bangalore Branch', 'KA','Bangalore');
INSERT INTO branch(name, state,city) VALUES ('Mumbai Branch', 'MH','Mumbai');
INSERT INTO branch(name, state,city) VALUES ('Delhi Branch', 'DL','Delhi');

INSERT INTO customer(name, state,city,branch_id) VALUES ('Ashish','DL', 'Delhi','4');
INSERT INTO customer(name, state,city,branch_id) VALUES ('Shivam','UP', 'Allahabad','1');
INSERT INTO customer(name, state,city,branch_id) VALUES ('Sam','MH', 'Mumbai','3');
INSERT INTO customer(name, state,city,branch_id) VALUES ('Ansal','KA', 'Banglore','2');

INSERT INTO account(balance, account_type,customer_id) VALUES ('2000','saving','4');
INSERT INTO account(balance, account_type,customer_id) VALUES ('1000','saving','2');
INSERT INTO account(balance, account_type,customer_id) VALUES ('10000','current','3');
INSERT INTO account(balance, account_type,customer_id) VALUES ('1500','saving','1');
INSERT INTO account(balance, account_type,customer_id) VALUES ('1500','loan account','1');

INSERT INTO Financial_Transaction(customer_id,date,mode,particulars,deposits,withdrawals,balance)
VALUES('1','2019-09-12','ATM','shopping flipkart','0','100','900');
INSERT INTO Financial_Transaction(customer_id,date,mode,particulars,deposits,withdrawals,balance)
VALUES('4','2019-09-12','check','bank','100','0','2200');
INSERT INTO Financial_Transaction(customer_id,date,mode,particulars,deposits,withdrawals,balance)
VALUES('3','2019-09-01','net banking','jio recharge','0','399','9601');
INSERT INTO Financial_Transaction(customer_id,date,mode,particulars,deposits,withdrawals,balance)
VALUES('2','2019-09-01','credit card','puma shoes phoenix mall','0','500','500');


INSERT INTO loan(customer_id, loan_type,amount,paid,isActive) VALUES ('3','vechical','200000','50000','True');
INSERT INTO loan(customer_id, loan_type,amount,paid,isActive) VALUES ('4','house','1000000','500000','True');
INSERT INTO loan(customer_id, loan_type,amount,paid,isActive) VALUES ('1','personal','100000','100000','False');










