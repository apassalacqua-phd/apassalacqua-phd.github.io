<p align="center">
  <a href="https://www.apassalacqua.net">
    <img alt="Andrea Passalacqua" src="./src/images/profile-pic-circle.png" width="100" />
  </a>
</p>
<h1 align="center">
Andrea Passalacqua's Portfolio
</h1>

## 🚀 Quick start

1.  **Updating timelines data.**

To update your timeline data (Education/Work Experience), head towards:

    ```
    /src/constants/EducationTimelineData.js

    OR

    /src/constants/WorkExperienceTimelineData.js

    ```

You can add your new entry or update an existing one by following the specified data format over there.

2.  **Publishing your content.**

To publish your new content for any of the respective 3 categories provided, head towards the designated folder, e.g. for research

    ```
    /content/research/slug-for-url-all-small-letters-with-no-special-symbols

    create a new index.md file or copy from another existing one and follow the pattern.

    for static_files included as a reference in index.md (e.g. *.pdf)

    copy the created _slug folder to /static/posts/research/your_slug_folder/your_file_name.file_extension

    and then reference it as a link in MD format in your index.md file that you worked on earlier. Refer to existing posts to gain a better understanding.


    ```
