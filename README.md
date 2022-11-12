# tailwindcss_projects
 
This repository is solely intended for Tailwind Projects. The projects posted inside this repository are a subject to further changes if deemed necessary at any time in the future. The repository is divided in two: TailwindCSS Mini Projects and TailwindCSS Large Projects. For mini projects, Content Delivery Network [CDN] is used while for relatively larger projects, I used Command-Line Interface [CLI]. The designs are mainly borrowed from uidesigndaily.com

# CLI Installment

1. npm init -y | creating a package.json file where you will add: 
  "build": "tailwindcss -i ./input.css -o ./css/styles.css"
  "watch": "tailwindcss -i ./input.css -o ./css/styles.css --watch"
  
2. npm install -D tailwindcss | it will install node_modules and package_lock.json files. No changes on these files is required.
3. npx tailwind init | it will install tailwind.config.js file where you will be able to customize TailwindCSS and link your html file "content":["./*.html"]
4. Create input.css, where you will add:
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
5. on Terminal => npm run build [necessary only one time]. Then, npm run watch. After all, link ./css/styles.css to index.html file
