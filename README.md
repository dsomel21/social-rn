# Social App

This is a social app that I am trying to sharpen my skill up in React Native and to renew my thinking in authentication.

## Getting Started

As of right now, the folder structure is divided into 2 main sections, `social-backend` and `social-mobile`, which contains the React set of things. So for now you will have to run two servers.


Here is a step by step example of how to get a development env running:

###### For the **server** and API:
```
cd social-backend
nodemon dev
```
And the server will be running at `localhost:3000`


###### To launch the **frontend**, run:

```
cd social-mobile
yarn start
```
After you do this, since we are using Expo (for now at least), you should see a screen that looks like this:

![Expo Launcher](https://i.imgur.com/ik4WHps.png)


I usually just send it to my email an open it in the Expo app! I am still playing around with this, I want something that is a bit more convenient, but it is nice to quickly get a true native feeling via iPhone.

###### Viewing Data:
In your CLI:
```
mongo
...
...
MongoDB shell version: 2.X.X
connecting to: test
> use social
switched to db social
> db.groups.find();
{ "_id" : ObjectId("5c6380e2100c8b273df01f6c"), "socials" : [ ], "name" : "Kanye West Group", "description" : "All Fans of Mr. West", "createdAt" : ISODate("2019-02-13T02:28:50.288Z"), "updatedAt" : ISODate("2019-02-13T02:28:50.288Z"), "__v" : 0 }

```

## Known Issues
For some reason, on the React side... when I wanted to update some state by fetching some data from my API, **the following does NOT work**.

`fetch('http://localhost:3000/api/socials')`

You will get a ` fetch() Network Request Failed` Instead, **you must use**:

`fetch('http://192.168.2.20:3000/api/socials')`

You can find this IP via `ifconfig`. [It is a pretty common problem, others experienced it too!](https://www.youtube.com/watch?v=shstJgkLW-I)

## Things to Do:

*


## Built With

* React Native - Front end
* Express JS - Creating APIs and handle server requests
* MongoDB - Felt like using Mongo
* Mongoose - Generating schemas and ODM
* ESLint- AirBnB Style (I used `eslint --init`)

## License

This project is licensed under the MIT License.

## Acknowledgments

* Discord Reactiflux
* YouTuber

