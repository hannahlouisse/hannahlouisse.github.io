import needle from 'needle';

const sendRequests = async () => {

    //add student 1
    const saveStudent1 = await needle('post',
        'http://localhost:3000/save-student',
        {
            stdnum: '2024-12345',
            fname: 'Mary Jane',
            lname: 'Watson',
            age: 20
        });
    console.log(saveStudent1.body);

    //add student 2
    const saveStudent2 = await needle('post',
        'http://localhost:3000/save-student',
        {
            stdnum: '2024-67890',
            fname: 'Peter',
            lname: 'Parker',
            age: 20
        });
    console.log(saveStudent2.body);

    //add student 3
    const saveStudent3 = await needle('post',
        'http://localhost:3000/save-student',
        {
            stdnum: '2024-95246',
            fname: 'Gwen',
            lname: 'Stacy',
            age: 20
        });
    console.log(saveStudent3.body);

    //add student 4
    const saveStudent4 = await needle('post',
        'http://localhost:3000/save-student',
        {
            stdnum: '2021-21436',
            fname: 'Kirsten',
            lname: 'Dunst',
            age: 23
        });
    console.log(saveStudent4.body);

    //add student 5
    const saveStudent5 = await needle('post',
        'http://localhost:3000/save-student',
        {
            stdnum: '2021-05812',
            fname: 'Tobey',
            lname: 'Maguire',
            age: 23
        });
    console.log(saveStudent5.body);

    //update lname of Mary Jane to "Parker"
    const update = await needle('post',
        'http://localhost:3000/update',
        { fname: 'Mary Jane' });

    //delete student with stdnum 2024-95246 (Gwen Stacy)
    const removeUser = await needle('post',
        'http://localhost:3000/remove-user',
        { stdnum: '2024-95246' });

    //find student with stdnum 2024-12345 (Mary Jane)
    const user = await needle('get',
        'http://localhost:3000/user?stdnum=2024-12345');
    console.log(user.body);

    //show all students
    const members = await needle('get',
        'http://localhost:3000/members');
    console.log(members.body);

    //delete all students
    const removeAllUser = await needle('post',
        'http://localhost:3000/remove-all-user');
    console.log(removeAllUser.body);

};

sendRequests();
