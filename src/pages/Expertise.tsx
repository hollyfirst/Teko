import SkillsSection from "../components/SkillsSection"
import Visual from "./Visual"

function Expertise() {
  return (
    <main className="">
    
        <aside>
            <Visual/>
        </aside>
        <aside>
          <div className="pg">
            
            <SkillsSection />

            <div className="hero-stats stats">
                <div>
                <strong>44+</strong>
                <span>Webpages built</span>
                </div>
                <div>
                <strong>12th</strong>
                <span>web app</span>
                </div>
                <div>
                <strong>100%</strong>
                <span>technical Enterprise</span>
                </div>
            </div>
          </div>
        </aside>

        
    </main>
      
  )
}

export default Expertise
