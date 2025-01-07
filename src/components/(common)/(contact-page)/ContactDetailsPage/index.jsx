import { Button } from "@/components/ui/Button";

const ContactDetails = () => {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-6 md:space-y-8">
            <p className="block grow text-xl uppercase">Contact us</p>
            <p>
              For membership enquiries, please contact us via email, telephone
              or by submitting an online enquiry form.
            </p>
            <p className="cursor-pointer underline">02081495432</p>
            <p className="cursor-pointer underline">
              Aegon House 13 Lanark Square (Ground Floor East) London E14 3LP
            </p>
          </div>
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4 gap-y-6">
                <label className="flex flex-col space-y-2 self-stretch">
                  <span className="block grow uppercase">
                    REASON FOR CONTACTING SOLICE
                  </span>
                  <select className="h-form-control w-full border-b border-b-foreground bg-transparent outline-none">
                    <>
                      <option value="New Membership Enquiry">
                        New Membership Enquiry
                      </option>
                      <option value="Clinic or Practitioner">
                        Clinic or Practitioner
                      </option>
                      <option value="Marketing and PR">Marketing and PR</option>
                      <option value="General ">General </option>
                    </>
                  </select>
                </label>
                <label className="flex flex-col space-y-2 self-stretch">
                  <span className="block grow uppercase">FIRST NAME</span>
                  <input
                    type="text"
                    className="h-form-control w-full border-b border-b-foreground bg-transparent outline-none"
                  />
                </label>
                <label className="flex flex-col space-y-2 self-stretch">
                  <span className="block grow uppercase">SURNAME</span>
                  <input
                    type="text"
                    className="mt-auto block h-form-control w-full border-b border-b-foreground bg-transparent outline-none"
                  />
                </label>
                <label className="flex flex-col space-y-2 self-stretch">
                  <span className="block grow uppercase">EMAIL</span>
                  <input
                    type="email"
                    className="h-form-control w-full border-b border-b-foreground bg-transparent outline-none"
                  />
                </label>
                <label className="flex flex-col space-y-2 self-stretch">
                  <span className="block grow uppercase">PHONE NUMBER</span>
                  <input
                    type="tel"
                    className="h-form-control w-full border-b border-b-foreground bg-transparent outline-none"
                  />
                </label>
                <label className="flex flex-col space-y-2 self-stretch">
                  <span className="block grow uppercase">
                    DO YOU CONSENT FOR SOLICE TO CONTACT YOU?
                  </span>
                  <select className="h-form-control w-full border-b border-b-foreground bg-transparent outline-none">
                    <>
                      <option value="yes">Yes</option>
                      <option value="no ">No</option>
                    </>
                  </select>
                </label>
                <label className="flex flex-col space-y-2 self-stretch md:col-span-2">
                  <span className="block grow uppercase">
                    COUNTRY OF RESIDENCE
                  </span>
                  <select className="h-form-control w-full border-b border-b-foreground bg-transparent outline-none">
                    <>
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Antigua &amp; Deps">
                        Antigua &amp; Deps
                      </option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bosnia Herzegovina">
                        Bosnia Herzegovina
                      </option>
                      <option value="Botswana">Botswana</option>
                      <option value="Brazil">Brazil</option>
                      <option value="Brunei">Brunei</option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina">Burkina</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="Cape Verde">Cape Verde</option>
                      <option value="Central African Rep">
                        Central African Rep
                      </option>
                      <option value="Chad">Chad</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Congo">Congo</option>
                      <option value="Congo {Democratic Rep}">
                        Congo {"Democratic Rep"}
                      </option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">
                        Dominican Republic
                      </option>
                      <option value="East Timor">East Timor</option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Equatorial Guinea">
                        Equatorial Guinea
                      </option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Greece">Greece</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guinea-Bissau">Guinea-Bissau</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Iran">Iran</option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland {Republic}">
                        Ireland {"Republic"}
                      </option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Ivory Coast">Ivory Coast</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value="Korea North">Korea North</option>
                      <option value="Korea South">Korea South</option>
                      <option value="Kosovo">Kosovo</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Laos">Laos</option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libya">Libya</option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Macedonia">Macedonia</option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="Marshall Islands">Marshall Islands</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Micronesia">Micronesia</option>
                      <option value="Moldova">Moldova</option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montenegro">Montenegro</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar, {Burma}">
                        Myanmar, {"Burma"}
                      </option>
                      <option value="Namibia">Namibia</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Palau">Palau</option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Romania">Romania</option>
                      <option value="Russian Federation">
                        Russian Federation
                      </option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="St Kitts &amp; Nevis">
                        St Kitts &amp; Nevis
                      </option>
                      <option value="St Lucia">St Lucia</option>
                      <option value="Saint Vincent &amp; the Grenadines">
                        Saint Vincent &amp; the Grenadines
                      </option>
                      <option value="Samoa">Samoa</option>
                      <option value="San Marino">San Marino</option>
                      <option value="Sao Tome &amp; Principe">
                        Sao Tome &amp; Principe
                      </option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Serbia">Serbia</option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="Sierra Leone">Sierra Leone</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Somalia">Somalia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="South Sudan">South Sudan</option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Swaziland">Swaziland</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Syria">Syria</option>
                      <option value="Taiwan">Taiwan</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania">Tanzania</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Togo">Togo</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Trinidad &amp; Tobago">
                        Trinidad &amp; Tobago
                      </option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="Vatican City">Vatican City</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Vietnam">Vietnam</option>
                      <option value="Yemen">Yemen</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                    </>
                  </select>
                </label>
                <label className="flex flex-col space-y-2 self-stretch md:col-span-2">
                  <span className="block grow uppercase">
                    WHERE DID YOU HEAR ABOUT SOLICE?{" "}
                  </span>
                  <select className="h-form-control w-full border-b border-b-foreground bg-transparent outline-none">
                    <>
                      <option value="Solice website">Solice website</option>
                      <option value="Newsletter">Newsletter</option>
                      <option value="Social media">Social media</option>
                      <option value="Article">Article</option>
                      <option value="Referral">Referral</option>
                      <option value="Search engine ">Search engine </option>
                    </>
                  </select>
                </label>
                <label className="flex flex-col space-y-2 self-stretch md:col-span-2">
                  <span className="block grow uppercase">ENQUIRY </span>
                  <textarea
                    cols={5}
                    className="w-full border-b border-b-foreground bg-transparent py-2 outline-none"
                  ></textarea>
                </label>
              </div>
              <div>
                <label className="flex items-center gap-4">
                  <input type="checkbox" className="checkbox" />
                  <span>
                    I HAVE READ AND UNDERSTOOD THE SOLICE PRIVACY POLICY
                  </span>
                </label>
              </div>
              <div className="text-right">
                <Button className="w-1/2" type="submit">
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
