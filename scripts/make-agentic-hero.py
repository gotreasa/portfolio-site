# Generates content/services/agentic-engineering/agentic-engineering.webp (21 Oct 2026).
# Run: uv run --with wordcloud --with pillow python3 scripts/make-agentic-hero.py <out.webp>
# Every word is one the career record supports; keep it that way when editing.
import random, sys
from wordcloud import WordCloud
words = {"Claude Code":12,"AI Agents":12,"Agentic Engineering":11,"Developer Tooling":10,"nWave":10,"Vita":9,"gSmith":9,
 "Python":8,"TypeScript":7,"Node.js":7,"JavaScript":7,"Test Driven Development":8,"Continuous Integration":7,"GitHub Actions":7,
 "Blind-graded Experiments":6,"Code Review":6,"Curriculum Authoring":6,"Jest":5,"Cucumber":5,"npm":5,"Bash":5,"Coach":6,"Trainer":6}
pal=["#6fa8b6","#a9e1e8","#e2a38c","#86c5cf","#d98c74"]
def col(*a,**k): return random.choice(pal)
random.seed(21)
wc=WordCloud(width=1920,height=1080,background_color="#e5e5e5",color_func=col,prefer_horizontal=0.85,
             max_font_size=230,min_font_size=18,relative_scaling=0.5,margin=6,repeat=True,max_words=140,random_state=21)
wc.generate_from_frequencies(words)
wc.to_image().save(sys.argv[1],"WEBP",quality=82)
