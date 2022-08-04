# Mediafire Url Generator

![GitHub repo size](https://img.shields.io/github/repo-size/xfrcc/mediafire-url-generator?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/xfrcc/mediafire-url-generator?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/xfrcc/mediafire-url-generator?style=for-the-badge)


## Generates direct download url for mediafire files for free

## 💻 Prerequisites

Before starting, make sure you've met the following requirements:
* `Node.js v14.x`

## 🚀 Installing

Install latest version from NPM:

```
npm i mediafire-url-generator
```

## ☕ Usage

```
const mediafire = require('mediafire-url-generator');

const main = async(url) =>  {
  const directUrl = await mediafire.get(url);
  console.log(directUrl);
}
// url could be actual url or just the identifier
main('https://www.mediafire.com/file/wasdwasdwasd/file');
```


## 📫 Contributing
To contribute, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to original branch: `git push origin mediafire-url-generator`
5. Create the pull request.

Alternatively, see the GitHub documentation at [how to create a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 🤝 Collaborators

We thank the following people who contributed to this project:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/19640692" width="100px;" alt="Photo of Iuri Silva on GitHub"/><br>
        <sub>
          <b>Drew</b>
        </sub>
      </a>
    </td>
  </tr>
</table>


## 📝 License

This project is under license. see the file [LICENSE](LICENSE.md) for more details.

[⬆ Back to the top](#mediafire-url-generator)<br>
