---
title: What exactly is Magma?
author: LeStegii
date: 2022-06-21T16:52:12.911Z
tags:
  - information
  - meta
thumbnail: /assets/images/blog/magma_blog_cb_spigot_etc.png
thumbnailAlt: What exactly is (Craft)Bukkit, Spigot and Paper?
description: What exactly is (Craft)Bukkit, Spigot and Paper?
---
### Heyo!

In this post I will tell you a bit about what exactly Magma is and how it is related to Forge, (Craft)Bukkit, Spigot and Paper. While this most likely won't be 100% accurate, it should give you a basic understanding of what all these things are and how they work.

### Where to begin?

**Magma is a combination of Forge and Spigot**. But what are these? I'm pretty sure you know what Forge is. If not, it is a modloader for Minecraft which allows the game to be extended with new blocks, mobs, items and more. **Spigot/Bukkit** are also well known by most server admins, but most people don't really know what exactly they are and how they are related to each other.

### What's (Craft)Bukkit?

**Bukkit** is an **API for creating Bukkit plugins**. If you want to create a plugin for a Bukkit based server, you have to use the Bukkit API for this. 
**CraftBukkit** on the other hand is an **implementation of Bukkit for the Minecraft Vanilla server**. It basically **allows plugins to load** and **connects the Bukkit API** with the real Minecraft Server, so that the API can interact with the server.

### What's Spigot/Paper?

**Spigot is a fork (follow up project) of CraftBukkit**. This means it also is an implementation of Bukkit for the Minecraft server, but it also has **some more features** (BungeeCord, better performance, more config options, ...) and adds **a few new methods** to the Bukkit API.

**Paper is a fork of Spigot**. It is based on **performance and bug-fixes**, as Spigot's performance is not perfect. Paper also has a much bigger API and much more features compared to CraftBukkit/Spigot. The gap between Spigot and Paper is much bigger than the one between CraftBukkit and Spigot though, since **Paper changes a lot of fundamental mechanics**, such as chunkloading or world generation.

### So what is Magma?

Magma takes all the changes that have been made by CraftBukkit and Spigot and **implements them into the Forge server**. Since Paper changes many fundamentals of the server, it is **not possible to implement all Paper changes** because they are incompatible with Forge. So in the end, Magma is Forge, but with the changes made by CraftBukkit and Spigot.