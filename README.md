<h1 align="center" style="font-weight: bold;">Login and Register API 💻</h1>

<p align="center">
    <b>System to Login and Register Users</b>
</p>

<h2 id="technologies">💻 Technologies</h2>

- Typescript
- MongoDB
- NodeJS
- JsonWebToken
- Bcrypt

<h2 id="started">🚀 Getting started</h2>

How to run this project locally.

<h3>Prerequisites</h3>

Prerequisites to run project:

- [NodeJS](https://nodejs.org/)
- [Git](https://git-scm.com/)

<h3>Cloning</h3>

How to clone project

```bash
git clone https://github.com/Sottili/api_login_register_typescript.git
```

<h3>Starting</h3>

After clone the project, use below command lines to execute.

```bash
cd project-name
npm i (install dependencies)
npm run dev (to execute this project)
```

<h2 id="routes">📍 API Endpoints</h2>

Main routes of API, and what are their expected request bodies.
​
| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>POST /register</kbd>     | register new user
| <kbd>POST /auth</kbd>    | authenticate user

<h3 id="get-auth-detail">POST /register</h3>

**REQUEST**
```json
{
    "name": "name test",
    "telphone": "4443122",
    "email": "test@gmail.com",
    "password": "12345678"
}
```

<h3 id="post-auth-detail">POST /auth</h3>

**REQUEST**
```json
{
    "email": "test@gmail.com",
    "password": "12345678"
}
```

**RESPONSE**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2F0ZWdvcnkg",
  "email": "test@gmail.com"
}
```

<h2 id="colab">🤝 Collaborators</h2>

Thanks to contribute this project!

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/91507688?v=4" width="100px;" alt="Filipe Sottili Profile Picture"/><br>
        <sub>
          <b>Filipe Sottili</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
