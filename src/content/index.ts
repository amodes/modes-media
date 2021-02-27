// TODO maybe add year and places to the object (for hovering)
export const imageContent = {
  portugal: {
    paths: ["portugal/1.jpg", "portugal/2.jpg", "portugal/3.jpg", "portugal/4.jpg", "portugal/5.jpg", "portugal/7.jpg", "portugal/8.jpg", "portugal/9.jpg", "portugal/a.jpg", "portugal/b.jpg", "portugal/c.jpg", "portugal/d.jpg", "portugal/e.jpg", "portugal/f.jpg", "portugal/g.jpg"],
    title: "Portugal",
  },
  peru: {
    paths: ["peru/1-min.jpg", "peru/2-min.jpg", "peru/3-min.jpg", "peru/4-min.jpg", "peru/5-min.jpg", "peru/6-min.jpg", "peru/7-min.jpg", "peru/8-min.jpg", "peru/9-min.jpg", "peru/a.jpg", "peru/b.jpg", "peru/c.jpg", "peru/d.jpg", "peru/e.jpg", "peru/f.jpg", "peru/g.jpg", "peru/h.jpg", "peru/i.jpg", "peru/j.jpg", "peru/k.jpg", "peru/l.jpg", "peru/m.jpg", "peru/n.jpg", "peru/o.jpg", "peru/p.jpg"],
    title: "Peru",
  },
  vietnam: {
    paths: ["vietnam/1.jpg", "vietnam/2.jpg", "vietnam/3.jpg", "vietnam/4.jpg", "vietnam/5.jpg", "vietnam/6.jpg", "vietnam/7.jpg", "vietnam/8.jpg", "vietnam/9.jpg", "vietnam/a.jpg", "vietnam/b.jpg", "vietnam/c.jpg", "vietnam/d.jpg", "vietnam/e.jpg", "vietnam/f.jpg", "vietnam/g.jpg", "vietnam/h.jpg", "vietnam/i.jpg", "vietnam/j.jpg", "vietnam/k.jpg", "vietnam/l.jpg", "vietnam/m.jpg", "vietnam/n.jpg", "vietnam/o.jpg", "vietnam/p.jpg", "vietnam/q.jpg", "vietnam/r.jpg", "vietnam/s.jpg"],
    title: "Vietnam",
  },
};

export interface ImageContentElement {
  paths: string[];
  title: string;
}
