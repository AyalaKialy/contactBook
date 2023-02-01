import { useState, useEffect } from 'react';
import { User } from '../types'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import { Button, TextField } from '@mui/material';

export default function Users() {
    const [users, setUsers] = useState<User[] | []>([]);
    const [regex, setRegex] = useState<string>('');

    const fetchUsers = () => {
        fetch('https://randomuser.me/api/?results=9'
            , {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((data) => {
                data.json()
                    .then((res: { results: User[] }) => {
                        setUsers(users ? [...users, ...res.results] : [...res.results]);
                    })
            })
            .catch(err => {
                console.log('error: ', err);
            });
        search();
    };

    const search = () => {
        setUsers(
            users?.map((user: User) => {
                user.matchRegex = new RegExp(regex).test(user.name.first || user.name.last) && regex != ''
                return user;
            }));
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        search();
    }, [regex]);

    return (
        <Box marginTop={5} textAlign='center'>
            <Box sx={{ position: 'fixed', marginLeft: 2 }}>
                <TextField onChange={(event) => setRegex(event.target.value)} label='Highlight text by regex: ' variant='outlined' />
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', marginLeft: 27, marginTop: 5 }}>
                {users?.length &&
                    (users.map((user: User, index: number) => {
                        return <Card key={index} sx={{ width: 270, marginLeft: 2, marginBottom: 2, backgroundColor: user.matchRegex ? "yellow" : "write" }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Avatar src={user.picture.large} sx={{ width: 100, height: 100, marginLeft: 5, marginTop: 2 }} />
                                <Typography component='div' variant='h5'>
                                    {user.name.first + ' ' + user.name.last}
                                    {user.gender == 'male' ? <MaleIcon /> : <FemaleIcon />}
                                </Typography>
                                <Typography variant='subtitle1' color='text.secondary' component='div'>
                                    {user.email}
                                </Typography>
                            </CardContent>
                        </Card>
                    }))
                }
            </Box>

            <Button size='large' onClick={() => fetchUsers()}>Load More</Button>
        </Box >
    );
};
