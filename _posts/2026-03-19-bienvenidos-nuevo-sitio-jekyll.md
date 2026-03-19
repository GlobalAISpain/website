---
layout: post
title: "Bienvenidos al nuevo globalai.es — ahora en Jekyll y GitHub Pages"
date: 2026-03-19 10:00:00 +0100
author: "Global AI Spain"
tags: ["Comunidad", "Jekyll", "GitHub Pages"]
excerpt: "Hemos migrado nuestro sitio web a Jekyll publicado en GitHub Pages. Más rápido, open source y completamente gratuito."
---

Nos complace anunciarte que **globalai.es** estrena nueva infraestructura. Hemos migrado desde nuestra instalación de Umbraco a un sitio estático construido con **Jekyll** y publicado en **GitHub Pages**.

## ¿Por qué este cambio?

Nuestra misión siempre ha sido democratizar el acceso al conocimiento en IA. Ese mismo principio lo aplicamos a nuestra propia infraestructura:

- ⚡ **Rendimiento mejorado** — Sitio estático cargado desde la CDN de GitHub (Fastly), con tiempos de carga bajo 500ms
- 💰 **Coste cero** — GitHub Pages es completamente gratuito para organizaciones de código abierto
- 🔓 **Open Source** — Todo el código del sitio está disponible en [GitHub](https://github.com/GlobalAISpain/website)
- 🔒 **Mayor seguridad** — Sin servidor que mantener, sin base de datos expuesta, sin actualizaciones de CMS

## Cómo funciona

El flujo de trabajo es simple:

1. Cualquier colaborador hace un Pull Request con cambios de contenido
2. El CI/CD de GitHub Actions construye el sitio con Jekyll
3. El sitio se despliega automáticamente en GitHub Pages
4. El dominio `globalai.es` apunta via CNAME a `globalAISpain.github.io`

## ¿Quieres contribuir?

El repositorio es público. Si encuentras un error o quieres añadir contenido, abre un issue o Pull Request en [github.com/GlobalAISpain/website](https://github.com/GlobalAISpain/website).

¡Nos vemos en el próximo evento!

— *El equipo de Global AI Spain*
