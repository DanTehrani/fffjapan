import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';
import Text from '../components/Text';
import { ORGANIZE_GOOGLE_FORM_URL } from '../constants';
const largeSpace = '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0';

const StyledPrivacyPolicy = styled(Text)`
  white-space: pre-line;
  color: #000;
`;

const Heading = styled(Text)`
  display: inline-block;
  font-size: 1.4em;
  font-family: ${props => props.theme.fontFamilyBold};
  color: #000;
  white-space: pre-line;
  padding: 1em 0;
`;

const Body = styled(Text)`
  font-size: 0.9em;
  color: #000;
  white-space: pre-line;
`

const HeaderContainer = styled.div`
  margin-bottom: 5em;
`;


const FooterContainer = styled.div`
  margin-top: 5em;
`;


function PrivacyPolicy () {
  return (
    <Page>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
        <StyledPrivacyPolicy>
        当サイト fridaysforfuture.jp（以下，「当サイト」といいます。）では，
        ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）
        を定めます。 <br />

        <br />
        <br />
        <Heading>第1条（個人情報）</Heading>
        <br />

        <Body>
          「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報及び容貌，指紋，声紋にかかるデータ，及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
        </Body>

        <br />
        <br />
        <Heading>第2条（個人情報の収集方法）</Heading>
        <br />

        <Body>
        当サイトでは，氏名，年齢，住所，メールアドレスなどの個人情報をお尋ねすることがあります。
        </Body>

        <br />
        <br />
        <Heading>第3条（個人情報を収集・利用する目的）</Heading>
        <br />

        <Body>
        当サイトが個人情報を収集・利用する目的は、以下のとおりです。 <br />
        {largeSpace}1.ユーザーからのお問い合わせに回答するため <br />
        {largeSpace}2.当サイトの<a href={ORGANIZE_GOOGLE_FORM_URL}>オーガナイザー募集フォーム</a>使い、応募したの方へのご連絡のため <br />
        {largeSpace}3.重要なお知らせなど必要に応じたご連絡のため <br />
        {largeSpace}4.不正・不当な目的で当サイトを利用しようとするユーザーの特定をし，ご利用をお断りするため <br />
        {largeSpace}5.（上記の利用目的に付随する目的）<br />
        </Body>

        <br />
        <br />
        <Heading>第4条（利用目的の変更）</Heading>
        <br />

        <Body>
        利用目的の変更を行った場合には，変更後の目的について，
        当サイト所定の方法により，ユーザーに通知し，または本サイト上に公表するものとします。
        </Body>

        <br />
        <br />
        <Heading>第5条（個人情報の第三者提供）</Heading>
        <br />

        <Body>
        1.当サイトは，次に掲げる場合を除いて，あらかじめユーザーの同意を得ることなく，
        第三者に個人情報を提供することはありません。ただし，個人情報保護法その他の法令で認められる場合を除きます。 <br />
        {largeSpace}1.人の生命，身体または財産の保護のために必要がある場合であって，本人の同意を得ることが困難であるとき <br />
        {largeSpace}2.公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって，本人の同意を得ることが困難であるとき <br />
        {largeSpace}3.国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって，
        本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき <br />
        {largeSpace}4.予め次の事項を告知あるいは公表し，かつ当サイトが個人情報保護委員会に届出をしたとき <br />
        {largeSpace}{largeSpace}1.利用目的に第三者への提供を含むこと <br />
        {largeSpace}{largeSpace}2.利用目的に第三者への提供を含むこと第三者に提供されるデータの項目 <br />
        {largeSpace}{largeSpace}3.第三者への提供の手段または方法 <br />
        {largeSpace}{largeSpace}4.本人の求めに応じて個人情報の第三者への提供を停止すること <br />
        {largeSpace}{largeSpace}5.本人の求めを受け付ける方法 <br />
        <br />
        2.前項の定めにかかわらず，次に掲げる場合には，当該情報の提供先は第三者に該当しないものとします。<br />
        {largeSpace}1.当サイトが利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合 <br />
        {largeSpace}2.合併その他の事由による活動の承継に伴って個人情報が提供される場合 <br />
        {largeSpace}3.個人情報を特定の者との間で共同して利用する場合であって，
        その旨並びに共同して利用される個人情報の項目，共同して利用する者の範囲，利用する者の利用目的および当該個人情報の管理について責任を有する者の氏名または名称について，
        あらかじめ本人に通知し，または本人が容易に知り得る状態に置いた場合<br />
        </Body>

        <br />
        <br />
        <Heading>第6条（個人情報の開示）</Heading>
        <br />

        <Body>
          当サイトは，本人から個人情報の開示を求められたときは，本人に対し，遅滞なく, これを開示します。
        </Body>

        <br />
        <br />
        <Heading>第7条（個人情報の訂正および削除）</Heading>
        <br />

        <Body>
          1.ユーザーは，当サイトの保有する自己の個人情報が誤った情報である場合には，当サイトが定める手続きにより，
          当サイトに対して個人情報の訂正，追加または削除（以下，「訂正等」といいます。）を請求することができます。 <br />
          2.当サイトは，ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には，遅滞なく，
          当該個人情報の訂正等を行うものとします。 <br />
          3.当サイトは，前項の規定に基づき訂正等を行った場合，または訂正等を行わない旨の決定をしたときは，
          遅滞なく，これをユーザーに通知します。 <br />
        </Body>

        <br />
        <br />
        <Heading>第8条（個人情報の利用停止等）</Heading>
        <br />

        <Body>
          1.当サイトは，本人から，個人情報が，利用目的の範囲を超えて取り扱われているという理由，
          または不正の手段により取得されたものであるという理由により，
          その利用の停止または消去（以下，「利用停止等」といいます。）を求められた場合には，遅滞なく必要な調査を行います。 <br />
          2.前項の調査結果に基づき，その請求に応じる必要があると判断した場合には，
          遅滞なく，当該個人情報の利用停止等を行います。<br />
          3.当サイトは，前項の規定に基づき利用停止等を行った場合，または利用停止等を行わない旨の決定をしたときは，
          遅滞なく，これをユーザーに通知します。 <br />
          4.前2項にかかわらず，利用停止等に多額の費用を有する場合その他利用停止等を行うことが困難な場合であって，
          ユーザーの権利利益を保護するために必要なこれに代わるべき措置をとれる場合は，この代替策を講じるものとします。 <br />
        </Body>

        <br />
        <br />
        <Heading>第9条（プライバシポリシーの変更）</Heading>
        <br />

        <Body>
        1.本ポリシーの内容は，法令その他本ポリシーに別段の定めのある事項を除いて
        ，ユーザーに通知することなく，変更することができるものとします。<br />
        2.当サイトが別途定める場合を除いて，変更後のプライバシーポリシーは，
        本ウェブサイトに掲載したときから効力を生じるものとします。 <br />
        </Body>

        <br />
        <br />

        <Body>
          本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。 <br />
          Eメールアドレス：contact@fridaysforfuture.jp
        </Body>


        </StyledPrivacyPolicy>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Page>
  )
}

export default PrivacyPolicy;
